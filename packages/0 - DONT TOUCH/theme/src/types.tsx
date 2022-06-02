import type { invariant } from "./themes/default/tokens/invariant";

export type Tokens = {
    invariant: typeof invariant
    colors: {
        primary: string;
        secondary: string;
        contrast: string;
    };
    text: {
        primary: string;
        secondary: string;
        contrast: string;
    };
    background: {
        primary: string;
        secondary: string;
        contrast: string;
    };    
}  & Record<string, any>

export type ThemeModes = "dark" | "light"

export type Theme = {
    name: string;
    active: ThemeModes;
    dark: Tokens;
    light: Tokens;
} & Record<string, any>


