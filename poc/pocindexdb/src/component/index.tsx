/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * PocPoc Federated Micro Component
 */
import { ForwardedRef, forwardRef, Suspense } from 'react';
import { StoreIDB } from './idb/model';
import css from './index.module.css';
import { PocPocProps } from './types';

const idx = new StoreIDB()

const PocPoc = (props: PocPocProps, ref: ForwardedRef<unknown>) => {
  return <Suspense>
    <div className={css.root}>
      <h1>POC IndexDBs</h1>

      <button onClick={() => idx.search('bitchz')}>search</button>
      <button onClick={() => idx.index('bitchz')}>index</button>
      <button onClick={() => idx.create('bitchz')}>create</button>
      <button onClick={() => idx.read(24)}>read</button>
      <button onClick={() => idx.update(23, 'updated')}>update</button>
      <button onClick={() => idx.remove(23)}>remove</button>
    </div>

  </Suspense>
}

export default forwardRef<unknown, PocPocProps>(PocPoc);
