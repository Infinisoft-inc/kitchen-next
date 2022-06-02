import defaultTheme from "../themes/default"
import type { Theme, ThemeModes, Tokens } from '../types'

// const getCssVar = (name: string) => document.querySelector(':root')?.getAttribute(name)
const setCssVar = (name: string, val: string) => document.querySelector<HTMLElement>(":root")?.style?.setProperty(name, val)

export const initializeThemeTokens = (tokens: Tokens) => {
    for (const [k, v] of Object.entries(tokens)) {
        setCssVar(`--${k}-primary`, v.primary)
        setCssVar(`--${k}-secondary`, v.secondary)
        setCssVar(`--${k}-contrast`, v.contrast)
    }
}

export const getTheme = () => {
    const store = localStorage.getItem('theme')
    let activeTheme: Theme = defaultTheme

    if (store) {
        try {
            activeTheme = JSON.parse(store)
        } catch (err) {
            localStorage.setItem('theme', JSON.stringify(defaultTheme))
            activeTheme = defaultTheme
        }
    }

    return activeTheme
}



export const saveTheme = (newTheme: Theme) => {
    try {
        localStorage.setItem('theme', JSON.stringify(newTheme))
    } catch (err) {
        console.error(`saveTheme error`, err)
        localStorage.setItem('theme', JSON.stringify(defaultTheme))
    }
}

export const saveTokens = (newTokens: Tokens, mode: ThemeModes) => {
    try {
        const currentTheme = getTheme()
        saveTheme({
            ...currentTheme,
            active: mode,
            [mode]: newTokens
        })
    } catch (err) {
        console.error(`saveTheme error`, err)
        localStorage.setItem('theme', JSON.stringify(defaultTheme))
    }
}
