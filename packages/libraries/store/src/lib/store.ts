import { CreateStoreOptions, EmitEvent, InitStore, IStore, Mutate, SubscribeOptions, SubscriberEventHandler, Subscribers } from "..";

export class Store<S, P> implements IStore<S, P> {
  private _state?: S;
  private _subscribers: Subscribers<S, P> = new Map()
  private _devtool: any;


  constructor(init?: InitStore<S>, opt?: CreateStoreOptions) {

    if (typeof window === 'object' && typeof (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined') {
      this._devtool = (window as any).__REDUX_DEVTOOLS_EXTENSION__.connect({
        trace: true, serialize: {
          options: { map: true }
        }
      });

      init?.()
      .then(result => {
        this._state = result
        this.emit('@initialization')
        this.initializeDevtool()
      })
      .catch(console.error)
    }


  }

  private initializeDevtool() {

    this._devtool.subscribe((message: any) => {
      if (message.type === 'DISPATCH' && message.state) {
        console.log('DevTools requested to change the state to', message.state);
      }
    });

    // this._devtool.init({ ...this._state, list: Array.from((this._state as any)?.list) });
    this._devtool.init(this._state);
    this.subscribe((event, state, payload) => {
      console.log(`subscribe event state opaylaod`, event, state, payload)
      this._devtool.send({ type: event, payload }, { ...this._state, list: new Map((this._state as any)?.list) })
      // this._devtool.send({ type: event, payload }, { ...this._state, list: Array.from((this._state as any)?.list) })
    })
  }

  public getState = () => { return this._state }

  public subscribe = (callback: SubscriberEventHandler<S, P>, options?: SubscribeOptions) => {
    const id = Symbol()
    this._subscribers.set(id, { callback, options })
    return () => { this._subscribers.delete(id) }
  }

  public emit: EmitEvent<P> = (event, payload) => {
    this._subscribers.forEach(({ callback, options }) => {
      if (event.match(options?.filter ?? /[\s\S]*/g)) {
        callback(event, this._state, payload);
      }
    })
  }

  /**
   * State mutation
   * @param callback Called with state, must return new state
   */
  public mutate: Mutate<S> = (callback: (_state?: S) => S) => {
    const newState: any = callback(this._state)

    this._state = {
      ...this._state,
      ...newState,
    };

    this.emit('mutation',    newState.list.get(newState.editItemId) as any)
  }

}
