/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */


import { ThemeMode } from '../types';
import colors from './colors.json';
import fonts from './fonts.json';

const color = colors.color
const font = fonts.font

export const tokens = { ...color, ...font }
export const themeMode: ThemeMode = "light"


