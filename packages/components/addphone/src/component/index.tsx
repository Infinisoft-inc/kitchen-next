/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * AddPhone Federated Micro Component
 */
import { ForwardedRef, forwardRef, Suspense } from 'react';
import { AddIcon } from './assets/svg';
import css from './index.module.css';
import { AddPhoneProps } from './types';

const AddPhone = (props: AddPhoneProps, ref: ForwardedRef<unknown>) => {
  return (
    <Suspense>
      <div className={css.root}>
        <div className={css.box}>
          <input data-style="input:text:control" placeholder="gggg" />
          <button data-style="input:text:button:add">
            <AddIcon />
          </button>
        </div>
      </div>
    </Suspense>
  );
};

export default forwardRef<unknown, AddPhoneProps>(AddPhone);
