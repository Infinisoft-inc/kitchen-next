import colors from './blue/colors.json';
import fonts from './blue/fonts.json';

type Size = "large" | "medium" | "small"
type Typography = "headline" | "display" | "body" | "label" | "title"

const fontTokens = fonts.font
const fontSizeTokens = fonts.size.font
const colorTokens = colors.color

const tokens = { ...colorTokens, ...fontTokens }

export type ThemeMode = "dark" | "light"
export const themeMode: ThemeMode = "light"

export const key2var = (k: string) => `--${k.replaceAll('_', '-')}`

export const toggleThemeMode = () => {
    const _mode = localStorage.getItem('__theme__') || 'dark'
    localStorage.setItem('__theme__', _mode === 'dark' ? 'light' : "dark")
}

type Color = typeof colorTokens
type ColorTokens = keyof Color

type Font = typeof fontTokens
type FontTokens = keyof Font

type Tokens = FontTokens | ColorTokens

const typographyHandler: Function = (_token: FontTokens, _mode: ThemeMode) => {
    const family = tokens?.[_token].family.value
    const weight = tokens?.[_token].weight.value
    const size = fontSizeTokens[_token].value

    return `${key2var(_token)}-weight: ${weight}; ${key2var(_token)}-family: ${family}; ${key2var(_token)}-size: ${size}px;`
}

const colorHandler: Function = (_token: string, _mode: ThemeMode) => {
    const token = `${_token}_${_mode}` as Tokens
    const value = (tokens?.[token] as any)?.value
    return `${key2var(_token)}: ${value};`
}

const handlers = {
    md_sys_color: colorHandler,
    md_sys_typescale: typographyHandler
}

export const getToken = <K extends Tokens>(_tokens: K[]) => {
    const _mode = (localStorage.getItem('__theme__') || 'dark') as ThemeMode

    console.log(`handelrs = `, handlers)


    return `:host { ${_tokens?.map((_token) => {
        const handler = _token.split('_').slice(0, 3).join('_') as keyof typeof handlers

        console.log(`_token = `, _token)
        console.log(`_token.split('_').slice(0, 2).join('_')  `, _token.split('_').slice(0, 3).join('_'))
        console.log(`handler = `, handler)
        const ret = handlers?.[handler]?.(_token, _mode)
        console.log(`ret = `, ret)

        return ret
    }).join(' ')} }`
}

export type Context = {
    dynamicStyle: string
    getToken: typeof getToken
}

export const context: Context = {
    /**
     * Unused delete later
     * May be usefull for inline style? 
     */
    dynamicStyle: ``,
    getToken
}
