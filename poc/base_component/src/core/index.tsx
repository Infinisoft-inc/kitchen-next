/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Micro app entry point
 * Context Provider is created with localization, configuration andlogging
 */
import "@/component/assets/favicon.ico";
import { requiredTokens } from '@/style/tokens';
import React, { startTransition, Suspense, useEffect } from 'react';
import ReactShadowRoot from 'react-shadow-root';
import { ICoreProps } from './types';

const MicroContextProvider = React.lazy(() => import('@/core/context'))
const Component = React.lazy(() => import('@/component/index'));

const Core = (props: ICoreProps) => {
    const [tokens, setTokens] = React.useState('');

    useEffect(() => {
        startTransition(() => {
            const result = props?.getToken?.(requiredTokens) ?? ''
            setTokens(result)
        })
    }, []) // Probably useless since props mutation trigger render

    return (
        <MicroContextProvider context={props?.context}>
            <Suspense>
                <ReactShadowRoot>
                    <style>
                        {`${tokens}`}
                    </style>
                    <Suspense>
                        <Component />
                    </Suspense>
                </ReactShadowRoot>
            </Suspense>
        </MicroContextProvider>
    );
};

export default Core;
