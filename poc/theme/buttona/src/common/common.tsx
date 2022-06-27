/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import colors from './blue/colors.json';
import fonts from './blue/fonts.json';

const color = colors?.color
const font = fonts.font
export const tokens = { ...color, ...font }
export type ThemeMode = "dark" | "light"
export const themeMode: ThemeMode = "light"
type getToken = <K extends keyof typeof tokens>(_tokens: K[]) => string

export type Context = {
    dynamicStyle: string
    getToken: getToken
}

