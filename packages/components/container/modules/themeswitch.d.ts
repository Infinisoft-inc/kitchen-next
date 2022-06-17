/// <reference types="react" />
declare module "component/assets/dark" {
    export const DarkIcon: () => JSX.Element;
}
declare module "component/assets/light" {
    export const LightIcon: () => JSX.Element;
}
declare module "component/presets/index" {
    import React from 'react';
    export type ThemeModes = 'default' | 'lightmode' | 'darkmode';
    export type ThemeSwitchPresets = Record<ThemeModes, React.ReactNode>;
    /**
     * IT IS THE OPPOSITE ICON
     */
    export const themeswitchOppositeIconPresets: ThemeSwitchPresets;
}
declare module "component/types" {
    import React from "react";
    export type ThemeSwitchProps = Partial<React.HTMLAttributes<HTMLButtonElement>> & {};
}
declare module "themeswitch/ThemeSwitch" {
    /**
     * Copyright © All rights reserved 2022
     * Infinisoft Inc.
     * www.infini-soft.com
     *
     * ThemeSwitch Federated Micro Component
     */
    import React from 'react';
    const _default: React.ForwardRefExoticComponent<Partial<React.HTMLAttributes<HTMLButtonElement>> & React.RefAttributes<HTMLButtonElement>>;
    export default _default;
}
declare module "bootstrap" { }
declare module "component/index.stories" {
    import { ComponentMeta, ComponentStory } from '@storybook/react';
    const _default_1: ComponentMeta<import("react").ForwardRefExoticComponent<Partial<import("react").HTMLAttributes<HTMLButtonElement>> & import("react").RefAttributes<HTMLButtonElement>>>;
    export default _default_1;
    export const Example: ComponentStory<import("react").ForwardRefExoticComponent<Partial<import("react").HTMLAttributes<HTMLButtonElement>> & import("react").RefAttributes<HTMLButtonElement>>>;
}
