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

// const key2var = (k: string) => `--${k.replaceAll('_', '-')}`

type getToken = <K extends keyof typeof tokens>(_tokens: K[]) => { token: string, value: string }[]

// export const getToken = <K extends keyof typeof color>(_tokens: K[]) => {
//     console.log(`getToken Argument Tokens = `, _tokens)
//     const _mode = localStorage.getItem('__theme__') || 'dark'

//     return _tokens?.map((_token) => {
//         const token = `${_token}_${_mode}` as keyof typeof color
//         const value = color?.[token]?.value
//         return { token: key2var(_token), value }
//     })
// }

export type Context = {
    dynamicStyle: string
    getToken: getToken
}

