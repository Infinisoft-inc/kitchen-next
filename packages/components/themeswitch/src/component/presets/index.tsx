/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from 'react'
import { DarkIcon } from '../assets/dark'
import { LightIcon } from '../assets/light'


export type ThemeModes = 'default'| 'lightmode'|'darkmode'
export type ThemeSwitchPresets = Record<ThemeModes, React.ReactNode>

  /**
   * IT IS THE OPPOSITE ICON
   */
export const themeswitchOppositeIconPresets: ThemeSwitchPresets = {
  default: <DarkIcon />,
  lightmode: <DarkIcon />,
  darkmode: <LightIcon />,
}
