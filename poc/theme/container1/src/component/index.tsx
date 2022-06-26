/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * PocContainer Federated Micro Component
 */
import React, { startTransition, Suspense } from 'react';
import css from './index.module.css';
import { context, ThemeMode, themeMode, toggleThemeMode } from './theme';
import { PocContainerProps } from './types';



const ButtonA = React.lazy(() => import(/* webpackChunkName: 'ButtonA' */ 'buttona/ButtonA'))
const ButtonB = React.lazy(() => import(/* webpackChunkName: 'ButtonA' */ 'buttonb/ButtonB'))


const Container1 = (props: PocContainerProps) => {
  const [mode, setMode] = React.useState<typeof themeMode>('dark');

  const refreshMode = () => {
    startTransition(() => {
      toggleThemeMode()
      setMode((localStorage.getItem('__theme__') || 'dark') as ThemeMode)
    }
    )
  }

  return <Suspense>
    <header className={css.root}>
      <h1>POC#1 Container1</h1>

      <button onClick={refreshMode}>{mode}</button>

    </header>
    <main>
      <ButtonA mode={mode} context={context} variant='filled'>Button A Filled</ButtonA>
      <ButtonA mode={mode} context={context} variant='outlined'>Button A Outlined</ButtonA>
      <ButtonB context={context} />
    </main>
  </Suspense>
}

export default Container1;
