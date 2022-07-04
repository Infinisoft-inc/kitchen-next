/**
 * Convert Javascript Key in snake_case to CSS Var in Kebab-case.
 * @param k Key
 * @returns CSS Var
 */
export const key2var = (k: string) => `--${k.replaceAll('_', '-')}`;
