/// <reference types="react" />
declare module "component/types" {
    export type ButtonBProps = {
        title?: string;
        content?: string;
        context?: Context;
    };
    export type Context = {
        dynamicStyle: string;
    };
}
declare module "buttonb/ButtonB" {
    import { ButtonBProps } from "component/types";
    const _default: import("react").ForwardRefExoticComponent<ButtonBProps & import("react").RefAttributes<unknown>>;
    export default _default;
}
declare module "bootstrap" { }
declare module "component/presets/index" {
    export type ButtonBPresets = {};
    export const pocbuttonbPresets: ButtonBPresets;
}
