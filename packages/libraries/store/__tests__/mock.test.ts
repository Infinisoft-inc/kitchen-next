/*
 * Copyright © All rights reserved 2022
 * www.infini-soft.com
 */
const { createstore } = require('../src/index');

describe('Unit Testing', () => {

  it('Test1', async () => {
    const store = createstore(['dog'])
    store.add('bobz')

    console.log(`list = `,  store.getSnapshot().list);
  });
});

