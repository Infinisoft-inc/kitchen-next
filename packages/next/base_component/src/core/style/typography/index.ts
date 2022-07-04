import { key2var } from '../helpers';
import { ThemeMode } from '../theme';
import fonts from './fonts.json';

export type Size = "large" | "medium" | "small";
export type Typography = "headline" | "display" | "body" | "label" | "title";
export const fontTokens = fonts.font;
export const fontSizeTokens = fonts.size.font;

type Font = typeof fontTokens;
export type FontTokens = keyof Font;

/**
 *  Get Typography CSS Attributes for token
 * @param _token Token Key
 * @param _mode  Theme mode
 * @returns      3 css variables weight, family, size
 */
export const typographyToken2CssVariableMapper: Function = (_token: FontTokens, _mode: ThemeMode) => {
    const family = fontTokens?.[_token].family.value;
    const weight = fontTokens?.[_token].weight.value;
    const size = fontSizeTokens[_token].value;

    return `${key2var(_token)}-weight: ${weight}; ${key2var(_token)}-family: ${family}; ${key2var(_token)}-size: ${size}px;`;
};
