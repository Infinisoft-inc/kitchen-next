import { colorToken2CssVariableMapper, ColorTokens } from '../colors';
import { ThemeMode } from '../theme';
import { FontTokens, typographyToken2CssVariableMapper } from '../typography';

/**
 * Style injection
 */
export type Tokens = FontTokens | ColorTokens;

const token2CssVarMappers = {
    md_sys_color: colorToken2CssVariableMapper,
    md_sys_typescale: typographyToken2CssVariableMapper
};

export type GetToken = typeof getToken

export const getToken = <K extends Tokens>(_tokens: K[]) => {
    const _mode = (localStorage.getItem('__theme__') || 'dark') as ThemeMode;

    return `:host { ${_tokens?.map((_token) => {
        const handler = _token.split('_').slice(0, 3).join('_') as keyof typeof token2CssVarMappers;
        const result = token2CssVarMappers?.[handler]?.(_token, _mode)

        return result;
    }).join(' ')} }`;
};
