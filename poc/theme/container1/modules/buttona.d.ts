/// <reference types="react" />
declare module "component/types" {
    export type ButtonAProps = {
        title?: string;
        content?: string;
        context?: Context;
    };
    export type Context = {
        dynamicStyle: string;
    };
}
declare module "buttona/ButtonA" {
    import { ButtonAProps } from "component/types";
    const _default: import("react").ForwardRefExoticComponent<ButtonAProps & import("react").RefAttributes<unknown>>;
    export default _default;
}
declare module "bootstrap" { }
declare module "component/presets/index" {
    export type ButtonAPresets = {};
    export const buttonaPresets: ButtonAPresets;
}
