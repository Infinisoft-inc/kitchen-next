/*
 * Copyright © All rights reserved 2022
 * www.infini-soft.com
 */
import createstore from '../src/store/createstore';


describe('Unit Testing', () => {

  it('Array initializer getSnapShot()', () => {
    const store = createstore(() => ['dog', 'bobz'])

    expect(store.getSnapshot()).toEqual(expect.arrayContaining(['dog', 'bobz']));
  });

  it('Array mutate()', () => {
    const store = createstore(() => ['dog', 'bobz'])
    store.mutate((_state)=> {
      return ['mutation']
    })

    expect(store.getSnapshot()).toEqual(expect.arrayContaining(['mutation']));
  });

  it('Array initializer getServerSnapshot()', () => {
    const store = createstore(() => [{ id: 1, name: 'dog' }, { id: 2, name: 'bobz' }])

    expect(store?.getServerSnapshot?.()).toEqual(expect.arrayContaining([{ id: 1, name: 'dog' }, { id: 2, name: 'bobz' }]));
  });

  it('Array initializer getNormalizedState()', () => {
    type Item = { id: number, name: string };
    const store = createstore<any, any, any, Item>(() => [{ id: 1, name: 'dog' }, { id: 2, name: 'titi' }],
      { id: 'id' })
    const expected = new Map<number, { id: number, name: string }>()
    expected.set(1, { id: 1, name: 'dog' })
    expected.set(2, { id: 2, name: 'titi' })

    expect(store?.getNormalizedState?.()).toEqual(expected);
  });

  it('Array initializer getNormalizedState() with predicat', () => {
    type Item = { id: number, name: string }
    const store = createstore<any, any, any, Item>(() => [{ id: 1, name: 'dog' }, { id: 2, name: 'titi' }],
      {
        keyPredicat: (item) => item.id
      })

    const expected = new Map<number, Item>()
    expected.set(1, { id: 1, name: 'dog' })
    expected.set(2, { id: 2, name: 'titi' })

    expect(store?.getNormalizedState?.()).toEqual(expected);
  });

  it('Array initializer getNormalizedState() with nested ID predicat', () => {
    type State = { list: Array<Item>, useless: string }
    type Item = { id: number, name: string }
    const _state: State = { list: [{ id: 1, name: 'dog' }, { id: 2, name: 'titi' }], useless: '' }
    const store = createstore<State, any, keyof State, Item>(() => (_state),
      {
        normalizeKeys: ['list'],
        keyPredicat: (item) => item.id
      })

    const expected = new Map<number, Item>()
    expected.set(1, { id: 1, name: 'dog' })
    expected.set(2, { id: 2, name: 'titi' })

    expect(store?.getNormalizedState?.()).toEqual(expected);
  });

  it('Promise initializer', async () => {
    const initial = new Promise<string>((res, rej) => {
      setTimeout(() => { res('Congrats') }, 1000)
    })
    const store = createstore(() => initial)

    return initial.finally(() => expect(store.getSnapshot()).toEqual('Congrats'));
  });

  it('Subscribe and get notify on add', () => {
    const store = createstore(() => ['one'])
    const mock = jest.fn().mockImplementation()
    store.subscribe(mock)
    store.publish('test', 'useless')

    expect(mock).toBeCalledTimes(1);
    expect(store.getSnapshot()).toEqual(expect.arrayContaining(['one']));
  });

  it('Subscribe and Cook', () => {
    const store = createstore(() => ['one'])
    const mock = jest.fn().mockImplementation()
    const cookerHandler = jest.fn().mockImplementation((event, state, payload) => {
      let _state = state ?? []
      let _payload = payload ?? 'default'

      return [_payload, ..._state]
    })
    store.subscribe(mock)
    store.cook(cookerHandler)
    store.publish('event', 'payload')
    store.publish('event', 'payload')

    expect(mock).toBeCalledTimes(2);
    expect(cookerHandler).toBeCalledTimes(2);
    expect(store.getSnapshot()).toEqual(expect.arrayContaining(['one', 'payload', 'payload']));
  });

  it('Unsubscribe and uncook no more notifications', () => {
    const store = createstore(() => ['one'])
    const mock = jest.fn().mockImplementation()
    const cookerHandler = jest.fn().mockImplementation((event, state, payload) => {
      let _state = state ?? []
      let _payload = payload ?? 'default'

      return [_payload, ..._state]
    })
    const unsubscribe = store.subscribe(mock)
    const uncook = store.cook(cookerHandler)
    store.publish('event', 'payload')
    unsubscribe()
    uncook()
    store.publish('event', 'payload')

    expect(mock).toBeCalledTimes(1);
    expect(cookerHandler).toBeCalledTimes(1);
    expect(store.getSnapshot()).toEqual(expect.arrayContaining(['one', 'payload']));
  });

});

