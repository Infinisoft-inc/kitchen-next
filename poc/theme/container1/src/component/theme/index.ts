import tokens from './colors.json';

const color = tokens?.color
export type ThemeMode = "dark" | "light"
export const themeMode: ThemeMode = "light"

const key2var = (k: string) => `--${k.replaceAll('_', '-')}`

export const toggleThemeMode = () => {
    const _mode = localStorage.getItem('__theme__') || 'dark'
    localStorage.setItem('__theme__', _mode === 'dark' ? 'light' : "dark")
}

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

export const context: Context = {
    dynamicStyle: `:host { --md-sys-primary-color: orange; } button { background-color: var(--md-sys-primary-color); }`,
    getToken
}
