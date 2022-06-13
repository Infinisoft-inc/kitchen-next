/// <reference types="react" />
declare module "component/types" {
    import React from "react";
    export type ResponsiveProps = Partial<React.HTMLAttributes<HTMLElement>> & {
        /**
         * Show upper range dimensions
         * default display is none
         *
         * mobile: always display
         * tablet: show from width 480px and upper
         * laptop: show from width 768px and upper
         * desktop: show from width 1024px and upper
         * uhd: show from width 1200 px and upper
         */
        showUp: "mobile" | "tablet" | "laptop" | "desktop" | "uhd";
    };
}
declare module "responsive/Responsive" {
    import { ResponsiveProps } from "component/types";
    /**
     * Show/Hide children components
     */
    const Responsive: ({ children, showUp }: ResponsiveProps) => JSX.Element;
    export default Responsive;
}
declare module "bootstrap" { }
declare module "component/index.stories" {
    import { ComponentMeta, ComponentStory } from '@storybook/react';
    const _default: ComponentMeta<({ children, showUp }: import("component/types").ResponsiveProps) => JSX.Element>;
    export default _default;
    export const HideMobile: ComponentStory<({ children, showUp }: import("component/types").ResponsiveProps) => JSX.Element>;
    export const HideMobileTablet: ComponentStory<({ children, showUp }: import("component/types").ResponsiveProps) => JSX.Element>;
    export const HideMobileTabletLaptop: ComponentStory<({ children, showUp }: import("component/types").ResponsiveProps) => JSX.Element>;
}
declare module "component/presets/index" {
    export type ResponsivePresets = {};
    export const responsivePresets: ResponsivePresets;
}
