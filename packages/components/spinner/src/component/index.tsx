/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Module Federated Micro Component
 */
import React, { Suspense } from 'react';
import { colorsPreset } from "./presets/colors";
import styles from './presets/index.module.css';
import { SpinnerProps } from './types';

const Spinner = ({spinnerStyle, loaderStyle, loaderOuterStyle, loaderInnerStyle, colors= 'red'}:SpinnerProps ) => {

return <Suspense>
        <div className={styles.spinner} {...colorsPreset[colors]}  style={spinnerStyle}>
            <div className={`${styles.loader} ${styles['loader-1']}`}  style={loaderStyle}>
                <div className={styles["loader-outter"]} style={loaderOuterStyle}></div>
                <div className={styles["loader-inner"]} style={loaderInnerStyle}></div>
            </div>
        </div>
</Suspense>
}

export default Spinner;
