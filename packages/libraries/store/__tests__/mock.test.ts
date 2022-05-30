/*
 * Copyright © All rights reserved 2022
 * www.infini-soft.com
 */
// import { Predicat } from '../src/store/types';


describe('Unit Testing', () => {

  // it('Array initializer', () => {
  //   const store = createstore(['dog', 'bobz'])

  //   expect(store.getSnapshot().list).toEqual(expect.arrayContaining(['dog', 'bobz']));
  // });

  // it('Subscribe and get notify on add', () => {
  //   const store = createstore<string>(['one'])
  //   const mock = jest.fn().mockImplementation()
  //   store.subscribe(mock)
  //   store.add('two')

  //   expect(mock).toBeCalledTimes(1);
  //   expect(store.getSnapshot().list).toEqual(expect.arrayContaining(['one', 'two']));
  // });

  // it('Unsubscribe no more notifications', () => {
  //   const store = createstore<string>(['one'])
  //   const mock = jest.fn().mockImplementation()
  //   const unsubscribe = store.subscribe(mock)
  //   store.add('two')
  //   unsubscribe()
  //   store.add('no more callback')

  //   expect(mock).toBeCalledTimes(1);
  //   expect(store.getSnapshot().list).toEqual(expect.arrayContaining(['one', 'two']));
  // });

  // it('Remove one element', <T>() => {
  //   const store = createstore<string>(['one','two', 'three'])
  //   const mock = jest.fn().mockImplementation()
  //   const predicat: Predicat = jest.fn().mockImplementation(
  //     (value: T, index: number, array: T[]) => !String(value).includes('two'))

  //   store.subscribe(mock)
  //   store.remove(predicat)

  //   expect(mock).toBeCalledTimes(1);
  //   expect(store.getSnapshot().list).toEqual(expect.arrayContaining(['one', 'three']));
  // });

  // it('Change element', <T>() => {
  //   const store = createstore<string>(['one','two', 'three'])
  //   const mock = jest.fn().mockImplementation()
  //   const predicat: Predicat = jest.fn().mockImplementation(
  //     (value: T, index: number, array: T[]) => {
  //       if (index === 1){
  //         return 'changed'
  //       }

  //       return value
  //     })

  //   store.subscribe(mock)
  //   store.change(predicat)

  //   expect(mock).toBeCalledTimes(1);
  //   expect(store.getSnapshot().list).toEqual(expect.arrayContaining(['one', 'changed','three']));
  // });
});

