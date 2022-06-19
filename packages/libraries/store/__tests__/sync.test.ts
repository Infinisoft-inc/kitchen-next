/*
 * Copyright © All rights reserved 2022
 * www.infini-soft.com
 */
import "fake-indexeddb/auto";
import { Store } from '../src/lib/store';
import { StoreIDB } from '../src/lib/sync/model';


describe('Sync Unit Testing', () => {

  it('Mutation', async () => {

    const prom = new Promise((resolve) => {
      const sync = new StoreIDB<any, any, any>()
      const store = new Store<any, any>(() => Promise.resolve({ 0: 'dog', 1: 'bobz' }), { subscribers: [sync.eventHandler] })
      store.subscribe((event) => {
        if (event.match('mocked')) {
          resolve(true)
        }
      })

      setTimeout(() => store.emit('mocked'), 4000);
    })

    await expect(prom).resolves.toBe(true)
  })

  // it('Subscribe and get notify on add', () => {
  //   const store = new Store()
  //   const mock = jest.fn().mockImplementation()
  //   store.subscribe(mock)
  //   store.mutate((_state) => {
  //     return { d: 'd' }
  //   })

  //   expect(mock).toBeCalledTimes(1);
  //   expect(store.getState()).toEqual({ d: 'd' })

  // });

  // it('Subscribe on specific event and get notify once', () => {
  //   const store = new Store(() => Promise.resolve(['one']))
  //   let receivedPayload = ''
  //   const mock = jest.fn().mockImplementation((event, state, payload) => receivedPayload = payload)
  //   store.subscribe(mock, { filter: /(filter.test)/ })
  //   store.emit('nottriggered1', 'useless')
  //   store.emit('nottriggered2')
  //   store.emit('filter.test')
  //   store.emit('filter.test', 'payload')
  //   store.emit('nottriggered3')
  //   store.emit('nottriggered3', 'useless')

  //   expect(mock).toBeCalledTimes(2);
  //   expect(receivedPayload).toEqual('payload');
  // });

  // it('Unsubscribe', () => {
  //   const store = new Store(() => Promise.resolve(['one']))
  //   let receivedPayload = ''
  //   const mock = jest.fn().mockImplementation((event, state, payload) => receivedPayload = payload)
  //   const unsubscribe = store.subscribe(mock, { filter: /(filter.test)/ })

  //   store.emit('filter.test')
  //   store.emit('filter.test', 'payload')
  //   unsubscribe()
  //   store.emit('filter.test')

  //   expect(mock).toBeCalledTimes(2);
  //   expect(receivedPayload).toEqual('payload');
  // });

  // it('Mutation Verify Subscribers POJO Payload', () => {
  //   const store = new Store<any, any>(() => Promise.resolve({ 0: 'dog', 1: 'bobz' }))

  //   store.subscribe((event, state, payload) => {
  //     if (event.match("@initialization")) {
  //       store.mutate((_state) => {
  //         return { 0: 'mutation' }
  //       })

  //       expect(store.getState()).toEqual({ 0: 'mutation' });
  //     }

  //   })
  // })

  // it('Mutation Verify Subscribers Iterable Payload', () => {
  //   let state: Record<string, { name: string }> = { 'dog': { name: 'pound' } }
  //   state = { ...state, 'dogette': { name: 'poundette' } }

  //   const store = new Store<any, any>(() => Promise.resolve(state))

  //   store.subscribe((event, state, payload) => {
  //     if (event.match("@initialization")) {
  //       store.mutate((_state) => {
  //         return { dog: { name: 'mutation' } }
  //       })

  //       expect(store.getState()).toEqual({ dog: { name: 'mutation' }, doguette: { name: 'poundette' } });
  //     }

  //   })
  // });

  // it('Constructor Initial Subscribers Option', () => {
  //   let state: Record<string, { name: string }> = { 'dog': { name: 'pound' } }

  //   const initialSubscriber1: SubscriberEventHandler = (event, _state, payload) => {
  //     if (event.match("expected")) {
  //       expect(payload).toEqual('payload');
  //     }
  //   }

  //   const store = new Store<any, any>(() => Promise.resolve(state), { subscribers: [initialSubscriber1] })
  //   store.emit('expected', 'payload')
  // });

})

