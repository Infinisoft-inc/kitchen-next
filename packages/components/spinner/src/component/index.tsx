/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Spinner Federated Micro Component
 */
import { ForwardedRef, forwardRef, Suspense } from 'react';
import styles from './index.module.css';
import { SpinnerProps } from './types';

const Spinner = (
  {
    spinnerStyle = {},
    loaderStyle = {},
    loaderOuterStyle = {},
    loaderInnerStyle = {},
  }: SpinnerProps,
  ref: ForwardedRef<unknown>,
) => {
  return (
    <Suspense>
      <div className={styles.spinner} style={spinnerStyle}>
        <div
          className={`${styles.loader} ${styles['loader-1']}`}
          style={loaderStyle}
        >
          <div
            className={styles['loader-outter']}
            style={loaderOuterStyle}
          ></div>
          <div
            className={styles['loader-inner']}
            style={loaderInnerStyle}
          ></div>
        </div>
      </div>
    </Suspense>
  );
};

export default forwardRef<unknown, SpinnerProps>(Spinner);
