import { addedDiff, deletedDiff, diff, updatedDiff } from "deep-object-diff";
import { CreateStoreOptions, EmitEvent, InitStore, IStore, Mutate, SubscribeOptions, SubscriberEventHandler, Subscribers } from "..";

export class Store<S, P> implements IStore<S, P> {
  private _state?: S;
  private _subscribers: Subscribers<S, P> = new Map()
  private _devtool: any;


  constructor(init?: InitStore<S>, opt?: CreateStoreOptions) {
    const isDevtool = typeof window === 'object' && typeof (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined'

    if (isDevtool) {
      this._devtool = (window as any).__REDUX_DEVTOOLS_EXTENSION__.connect({
        trace: true, serialize: {
          options: { map: true }
        }
      });
    }


    init?.()
      .then(result => {
        this._state = result
        this.emit('@initialization')

        if (isDevtool) {
          this.initializeDevtool()
        }
      })
      .catch(console.error)
  }

  /**
   * Initialize devtool
   */
  private initializeDevtool() {

    this._devtool.subscribe((message: any) => {
      if (message.type === 'DISPATCH' && message.state) {
        console.log('DevTools requested to change the state to', message.state);
      }
    });

    this._devtool.init(this._state);
    this.subscribe((event, state, payload) => {
      console.log(`Event `, event, `State `, state, `Payload `, payload)
      this._devtool.send({ type: event, payload }, state)
      // this._devtool.send({ type: event, payload }, { ...this._state, list: new Map((this._state as any)?.list) })
    })
  }

  /**
   * Get state
   * @returns State
   */
  public getState = () => { return this._state }

  /**
   * Subscribe to events
   * @param callback Event handler callback
   * @param options  Event options
   * @returns        Unsubscribe callback
   */
  public subscribe = (callback: SubscriberEventHandler<S, P>, options?: SubscribeOptions) => {
    const id = Symbol()
    this._subscribers.set(id, { callback, options })
    return () => { this._subscribers.delete(id) }
  }

  /**
   * Emit an event
   * @param event     Event name
   * @param payload   Event payload
   */
  public emit: EmitEvent<P> = (event, payload) => {
    this._subscribers.forEach(({ callback, options }) => {
      if (event.match(options?.filter ?? /[\s\S]*/g)) {
        callback(event, this._state, payload);
      }
    })
  }

  /**
   * State mutation
   * @param callback  Mutation callback
   */
  public mutate: Mutate<S> = (callback: (_state?: S) => S) => {
    const newState = { ...this._state, ...callback(this._state) }

    const stateDiff = diff(this._state as any, newState as any) as unknown as S
    const stateUpdatedDiff = updatedDiff(this._state as any, newState as any) as unknown as S
    const stateAddedDiff = addedDiff(this._state as any, newState as any) as unknown as S
    const stateDeletedDiff = deletedDiff(this._state as any, newState as any) as unknown as S

    console.log(`diff  `, stateDiff)
    console.log(`updated `, stateUpdatedDiff)
    console.log(`added `, stateAddedDiff)
    console.log(`deleted `, stateDeletedDiff)

    console.log(`state before mutation `, this._state)
    console.log(`stateDiff before mutation `, stateUpdatedDiff)

    this._state = {
      ...newState
    }

    console.log(`stateDiff after mutation `, stateUpdatedDiff)
    console.log(`state after mutation `, this._state)

    this.emit('mutation', stateDiff as unknown as P)
  }

}
