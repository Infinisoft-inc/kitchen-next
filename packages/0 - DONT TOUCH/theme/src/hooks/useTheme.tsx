/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { Switch } from "antd";
import React from "react";
import { getTheme, initializeThemeTokens, saveTheme } from "../helpers";
import type { Theme } from "../types";

export type UseThemeOutput = ReturnType<typeof useTheme>

export const useTheme = () => {
    const [theme, setTheme] = React.useState<Theme>(getTheme());

    const resetTheme = React.useCallback((newTheme: Theme) => {
        initializeThemeTokens(newTheme[newTheme.active])
        setTheme(newTheme)
        saveTheme(newTheme)
    }, [setTheme])


    React.useEffect(() => {
        resetTheme(getTheme())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const tokenChange = (k: string, v: object, field: string, value: string = '', reset: boolean = false) => {
        setTheme(prev => {
            const newState: Theme = {
                ...prev,
                [prev.active]: {
                    ...prev[prev.active],
                    [k]: {
                        ...prev[prev.active][k],
                        ...v,
                        [field]: value ?? ''
                    }
                }
            }
            if (reset) {
                resetTheme(newState)
            }
            return newState
        })
    }

    const onTokenChange = (k: string, v: object, field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        e.persist()

        tokenChange(k, v, field, e?.target?.value, false)
    }

    const toggleTheme = () => {
        setTheme(prevState => {
            const newMode = prevState?.active === 'dark' ? "light" as const : "dark" as const
            const newState = { ...prevState, active: newMode }

            if (prevState?.[newMode]) {
                initializeThemeTokens(prevState?.[newMode])
            }

            resetTheme(newState)

            return newState
        })
    }

    const ThemeSwitch = () => {
        return <Switch
            checked={theme.active === 'dark'}
            onChange={toggleTheme}
        />
    }

    return {
        toggleTheme,
        ThemeSwitch,
        theme,
        resetTheme,
        activeTokens: theme[theme.active],
        onTokenChange,
        tokenChange
    }
}