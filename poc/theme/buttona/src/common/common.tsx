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

export const getToken = <K extends keyof typeof color>(_token: K) => {
    console.log(`getToken Argument Token = `, _token)

    const token = `${_token}_${''}` as keyof typeof color
    console.log(`getToken themed Token = `, String(token))

    const value = color[token].value
    console.log(`getToken themed Token value = `, value)

    return { token: key2var(token), value }
}

export type Context = {
    dynamicStyle: string
    getToken: typeof getToken
}

