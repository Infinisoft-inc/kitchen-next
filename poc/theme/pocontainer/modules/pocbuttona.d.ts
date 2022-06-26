/// <reference types="react" />
declare module "component/types" {
    export type PocButtonAProps = {
        title?: string;
        content?: string;
        context?: Context;
    };
    export type Context = {
        dynamicStyle: string;
    };
}
declare module "pocbuttona/PocButtonA" {
    import { PocButtonAProps } from "component/types";
    const _default: import("react").ForwardRefExoticComponent<PocButtonAProps & import("react").RefAttributes<unknown>>;
    export default _default;
}
declare module "bootstrap" { }
declare module "component/index.stories" {
    import { ComponentMeta, ComponentStory } from '@storybook/react';
    import React from 'react';
    const _default_1: ComponentMeta<React.ForwardRefExoticComponent<import("component/types").PocButtonAProps & React.RefAttributes<unknown>>>;
    export default _default_1;
    export const StringArgs: ComponentStory<React.ForwardRefExoticComponent<import("component/types").PocButtonAProps & React.RefAttributes<unknown>>>;
    export const StringArgs2: ComponentStory<React.ForwardRefExoticComponent<import("component/types").PocButtonAProps & React.RefAttributes<unknown>>>;
}
declare module "component/presets/index" {
    export type PocButtonAPresets = {};
    export const pocbuttonaPresets: PocButtonAPresets;
}
