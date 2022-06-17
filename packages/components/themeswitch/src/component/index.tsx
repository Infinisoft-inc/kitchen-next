/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * ThemeSwitch Federated Micro Component
 */
import React, { ForwardedRef, forwardRef, startTransition, Suspense } from 'react';
import css from './index.module.css';
import { ThemeModes, themeswitchOppositeIconPresets } from './presets';
import { ThemeSwitchProps } from './types';

const THEME_KEY = "__theme__"
const LIGHTMODE = 'lightmode'
const DARKMODE = 'darkmode'
const defaultMode: ThemeModes = (localStorage.getItem(THEME_KEY) || DARKMODE) as ThemeModes

const ThemeSwitch = (props: ThemeSwitchProps, ref: ForwardedRef<HTMLButtonElement>) => {
  const [state, setState] = React.useState<ThemeModes>(defaultMode);

  const _toggle = (_state: ThemeModes) => {
    startTransition(() => {
      setState(_state)
    })
  }

  const toggleTheme = () => {
    const _body = document.getElementsByTagName('body')[0]

    const isLightMode = _body.className.includes(LIGHTMODE)
    const isDarkMode = _body.className.includes(DARKMODE)

    console.log(`(!isLightMode && !isDarkMode)`, (!isLightMode && !isDarkMode))
    console.log(`isDarkMode`, isDarkMode)
    console.log(`isLightMode`, isLightMode)

    if (!isLightMode && !isDarkMode) {
      _body.classList.add(defaultMode)
      localStorage.setItem(THEME_KEY, defaultMode)
      _toggle(defaultMode)
      return;
    }

    if (isLightMode) {
      _body.classList.remove(LIGHTMODE)
      _body.classList.add(DARKMODE)
      localStorage.setItem(THEME_KEY, DARKMODE)
      _toggle(DARKMODE)
      return;
    }

    if (isDarkMode) {
      _body.classList.remove(DARKMODE)
      _body.classList.add(LIGHTMODE)
      localStorage.setItem(THEME_KEY, LIGHTMODE)
      _toggle(LIGHTMODE)
      return;
    }

  }

  return <Suspense>
    <button ref={ref} {...props} onClick={toggleTheme} className={css.toggle}>
      {themeswitchOppositeIconPresets[state]}
    </button>
  </Suspense>
}

export default forwardRef<HTMLButtonElement, ThemeSwitchProps>(ThemeSwitch);
