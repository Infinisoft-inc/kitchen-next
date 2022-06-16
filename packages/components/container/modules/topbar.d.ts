/// <reference types="react" />
declare module "component/types" {
    import React from "react";
    export type TopBarProps = {
        /**
         * Brand image url
         */
        brandImageUrl?: string;
        /**
         * BrandImage Component Override
         */
        brandComponent?: React.ReactNode;
        /**
         * Menu Component Override
         */
        menuComponent?: React.ReactNode;
        /**
         * Override DSP Tokens
         * Overidding tokens will change it's value for the entire document
         */
        overrideTokens?: boolean;
    } & TokenBarDSP;
    /**
     * Theme DSP Tokens override
     */
    export type TokenBarDSP = {
        "background-color"?: string;
        color?: string;
    };
}
declare module "topbar/TopBar" {
    const _default: import("react").ForwardRefExoticComponent<{
        brandImageUrl?: string | undefined;
        brandComponent?: import("react").ReactNode;
        menuComponent?: import("react").ReactNode;
        overrideTokens?: boolean | undefined;
    } & import("component/types").TokenBarDSP & import("react").RefAttributes<HTMLDivElement>>;
    export default _default;
}
declare module "bootstrap" { }
declare module "component/index.stories" {
    import { ComponentMeta, ComponentStory } from '@storybook/react';
    import React from 'react';
    const _default_1: ComponentMeta<React.ForwardRefExoticComponent<{
        brandImageUrl?: string | undefined;
        brandComponent?: React.ReactNode;
        menuComponent?: React.ReactNode;
        overrideTokens?: boolean | undefined;
    } & import("component/types").TokenBarDSP & React.RefAttributes<HTMLDivElement>>>;
    export default _default_1;
    export const BrandImageURL: ComponentStory<React.ForwardRefExoticComponent<{
        brandImageUrl?: string | undefined;
        brandComponent?: React.ReactNode;
        menuComponent?: React.ReactNode;
        overrideTokens?: boolean | undefined;
    } & import("component/types").TokenBarDSP & React.RefAttributes<HTMLDivElement>>>;
    export const BrandComponentOverride: ComponentStory<React.ForwardRefExoticComponent<{
        brandImageUrl?: string | undefined;
        brandComponent?: React.ReactNode;
        menuComponent?: React.ReactNode;
        overrideTokens?: boolean | undefined;
    } & import("component/types").TokenBarDSP & React.RefAttributes<HTMLDivElement>>>;
}
declare module "component/presets/index" {
    export type TopBarPresets = {};
    export const topbarPresets: TopBarPresets;
}
