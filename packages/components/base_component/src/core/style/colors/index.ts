import { key2var } from '../helpers';
import { ThemeMode } from '../theme';
import colors from './colors.json';

type Color = typeof colorTokens;
export type ColorTokens = keyof Color;

export const colorTokens = colors.color;

/**
 *  Retreive Serialized Token CSS Variable
 * @param _token Color Token Key
 * @param _mode  Theme mode
 * @returns      Token: Value string
 */
export const colorToken2CssVariableMapper: Function = (_token: string, _mode: ThemeMode) => {
    const token = `${_token}_${_mode}` as ColorTokens;
    const value = (colorTokens?.[token] as any)?.value;

    return `${key2var(_token)}: ${value};`;
};
