import { getToken } from "../system";

export type Context = {
    dynamicStyle: string;
    getToken: typeof getToken;
};

export const context: Context = {
    /**
     * Unused delete later
     * May be usefull for inline style?
     */
    dynamicStyle: ``,
    getToken
};
