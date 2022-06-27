import colors from './blue/colors.json';
import fonts from './blue/fonts.json';

type Size = "large" | "medium" | "small"
type Typography = "headline" | "display" | "body" | "label" | "title"
const fontTokens = fonts.font
const colorTokens = colors.color
const tokens = {...colorTokens, ...fontTokens}

export type ThemeMode = "dark" | "light"
export const themeMode: ThemeMode = "light"

export const key2var = (k: string) => `--${k.replaceAll('_', '-')}`

export const toggleThemeMode = () => {
    const _mode = localStorage.getItem('__theme__') || 'dark'
    localStorage.setItem('__theme__', _mode === 'dark' ? 'light' : "dark")
}

type Tokens = keyof typeof tokens
type CSSVariable = {token: string, value: any}
type Handler = (_token:  Tokens, _mode: ThemeMode) => CSSVariable

const typographyHandler: Handler = (_token: Tokens,  _mode: ThemeMode) => {
    const value = tokens?.[_token]
    return { token: key2var(_token), value }
}

const colorHandler: Handler = (_token: string, _mode: ThemeMode) => {
    const token = `${_token}_${_mode}` as Tokens
    const value = tokens?.[token]
    return { token: key2var(_token), value }
}

const handlers = {
    md_sys_color: colorHandler,
    md_sys_typescale: typographyHandler
}

export const getToken = <K extends Tokens>(_tokens: K[]) => {
    const _mode = (localStorage.getItem('__theme__') || 'dark') as ThemeMode

    return _tokens?.map((_token) => {
        const handler = _token.split('.').slice(0,2).join('_') as keyof typeof handlers
        return handlers[handler](_token, _mode)
    })
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
