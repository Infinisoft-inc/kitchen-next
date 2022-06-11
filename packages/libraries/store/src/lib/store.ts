import { CreateStoreOptions, EmitEvent, InitStore, IStore, Mutate, SubscribeOptions, SubscriberEventHandler, Subscribers } from "..";
import { devtool } from "./devtool";

export class Store<S, P> implements IStore<S, P> {
  private _state?: S;
  private _subscribers: Subscribers<S, P> = new Map()


  constructor(init?: InitStore<S>, opt?: CreateStoreOptions) {

    init?.()
      .then(result => {
        this._state = result
        devtool({
          getState: this.getState,
          subscribe: this.subscribe,
          mutate: this.mutate,
          emit: this.emit
        })

        this.emit('@initialization')
      })
      .catch(console.error)
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
    const newState = callback(this._state)

    this._state = {
      ...this._state,
      ...newState
    };

    this.emit('mutation')
  }

}
