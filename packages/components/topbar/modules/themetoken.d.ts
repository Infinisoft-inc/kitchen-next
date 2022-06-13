/// <reference types="react" />
declare module "component/types" {
    export type useTokenOverrideProps = {
        name: string;
        overrideTokens: boolean;
        [k: string]: any;
    };
}
declare module "component/index" {
    import { useTokenOverrideProps } from "component/types";
    /**
     * Overide tokens
     * @param name token prefix
     * @param props Tokens object
     * @param overrideTokens Enable/Disable hook
     */
    const useTokenOverride: ({ name, overrideTokens, ...props }: useTokenOverrideProps) => JSX.Element;
    export default useTokenOverride;
}
declare module "bootstrap" { }
declare module "component/presets/index" {
    export type useTokenOverridePresets = {};
    export const themetokenPresets: useTokenOverridePresets;
}
