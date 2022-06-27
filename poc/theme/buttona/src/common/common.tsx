/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import tokens from './colors.json';

export const color = tokens?.color
export type ThemeMode = "dark" | "light"
export const themeMode: ThemeMode = "light"

const key2var = (k: string) => `--${k.replaceAll('_', '-')}`

export const getToken = <K extends keyof typeof color>(_tokens: K[]) => {
    console.log(`getToken Argument Tokens = `, _tokens)
    const _mode = localStorage.getItem('__theme__') || 'dark'

    return _tokens?.map((_token) => {
        const token = `${_token}_${_mode}` as keyof typeof color
        const value = color?.[token]?.value
        return { token: key2var(_token), value }
    })
}

export type Context = {
    dynamicStyle: string
    getToken: typeof getToken
}

