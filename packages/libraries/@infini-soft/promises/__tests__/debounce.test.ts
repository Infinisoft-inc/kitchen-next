/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { promiseDebounce } from "../src";


describe('promiseDebounce() Unit Testing', () => {

  it('Should resolve', async () => {
    const actual = promiseDebounce({
      request: () => Promise.resolve("success")
    })

    expect(actual).resolves.toMatch("success");
  });

  it('Should reject', async () => {
    const actual = promiseDebounce({
      request: () => Promise.reject("rejected")
    })

    expect(actual).rejects.toMatch("rejected");
  });

  it('Should be called once', async () => {
    const callback = jest.fn().mockImplementation(() => Promise.resolve("success"))

    const allPromises = [0, 1, 2, 3].map(() => promiseDebounce({
      request: callback,
      delay: 1000
    }))

    await expect(Promise.race(allPromises)).resolves.toEqual("success")
    expect(callback).toBeCalledTimes(1)
  });
});
