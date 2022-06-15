/*
 * Copyright © All rights reserved 2022
 * www.infini-soft.com
 */
import { Store } from '../src/lib/store';

/**
 * Timer snippet
 */
// jest.useFakeTimers();
// setTimeout(() => {
//   expect(store.getState()).toEqual({ d: 'd' })
// }, 1500);
// jest.runAllTimers()

// expect(store.getState()).toEqual({ 0: 'one' });



describe('Unit Testing', () => {

  it('Mutation', () => {
    const store = new Store<any, any>(() => Promise.resolve({ 0: 'dog', 1: 'bobz' }))
    store.mutate((_state) => {
      return { 0: 'mutation' }
    })

    expect(store.getState()).toEqual({ 0: 'mutation' });
  });

  it('Subscribe and get notify on add', () => {
    const store = new Store()
    const mock = jest.fn().mockImplementation()
    store.subscribe(mock)
    store.mutate((_state) => {
      return { d: 'd' }
    })

    expect(mock).toBeCalledTimes(1);
    expect(store.getState()).toEqual({ d: 'd' })

  });

  it('Subscribe on specific event and get notify once', () => {
    const store = new Store(() => Promise.resolve(['one']))
    let receivedPayload = ''
    const mock = jest.fn().mockImplementation((event, state, payload) => receivedPayload = payload)
    store.subscribe(mock, { filter: /(filter.test)/ })
    store.emit('nottriggered1', 'useless')
    store.emit('nottriggered2')
    store.emit('filter.test')
    store.emit('filter.test', 'payload')
    store.emit('nottriggered3')
    store.emit('nottriggered3', 'useless')

    expect(mock).toBeCalledTimes(2);
    expect(receivedPayload).toEqual('payload');
  });

  it('Unsubscribe', () => {
    const store = new Store(() => Promise.resolve(['one']))
    let receivedPayload = ''
    const mock = jest.fn().mockImplementation((event, state, payload) => receivedPayload = payload)
    const unsubscribe = store.subscribe(mock, { filter: /(filter.test)/ })

    store.emit('filter.test')
    store.emit('filter.test', 'payload')
    unsubscribe()
    store.emit('filter.test')

    expect(mock).toBeCalledTimes(2);
    expect(receivedPayload).toEqual('payload');
  });

  it('Mutation Verify Subscribers POJO Payload', () => {
    const store = new Store<any, any>(() => Promise.resolve({ 0: 'dog', 1: 'bobz' }))

    store.subscribe((event, state, payload) => {
      console.log(`event `, event, ` state `, state, ` payload `, payload)

      if (event.match("@initialization")) {
        store.mutate((_state) => {
          return { 0: 'mutation' }
        })

        expect(store.getState()).toEqual({ 0: 'mutation' });
      }

    })
  })

  it('Mutation Verify Subscribers Iterable Payload', () => {
    let state:Record<string, { name: string }> = {'dog': { name: 'pound' }}
    state = {...state, 'dogette': { name: 'poundette' }}

    const store = new Store<any, any>(() => Promise.resolve(state))

    store.subscribe((event, state, payload) => {
      console.log(`event `, event, ` state `, state, ` payload `, payload)

      if (event.match("@initialization")) {
        store.mutate((_state) => {
          return { dog: { name: 'mutation' } }
        })

        expect(store.getState()).toEqual({ dog: { name: 'mutation' }, doguette: { name: 'poundette' } });
      }

    })


  });

});

