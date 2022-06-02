/// <reference types="react" />
declare module "component/types" {
    import React from "react";
    export type FlexLineProps = {
        left?: React.ReactNode;
        leftProps?: Partial<React.HTMLProps<any>>;
        right?: React.ReactNode;
        rightProps?: Partial<React.HTMLProps<any>>;
    };
}
declare module "flexline/FlexLine" {
    /**
     * Copyright © All rights reserved 2022
     * Infinisoft Inc.
     * www.infini-soft.com
     *
     * Module Federated Micro Component
     */
    import React from 'react';
    import { FlexLineProps } from "component/types";
    export const FlexLine: ({ left, right, leftProps, rightProps }: FlexLineProps, ref: React.LegacyRef<HTMLDivElement> | undefined) => JSX.Element;
    const _default: React.ForwardRefExoticComponent<FlexLineProps & React.RefAttributes<HTMLDivElement>>;
    export default _default;
}
declare module "bootstrap" { }
declare module "component/index.stories" {
    import { ComponentMeta, ComponentStory } from '@storybook/react';
    const _default_1: ComponentMeta<import("react").ForwardRefExoticComponent<import("component/types").FlexLineProps & import("react").RefAttributes<HTMLDivElement>>>;
    export default _default_1;
    export const StringArgs: ComponentStory<import("react").ForwardRefExoticComponent<import("component/types").FlexLineProps & import("react").RefAttributes<HTMLDivElement>>>;
    export const LeftRightPropsArgs: ComponentStory<import("react").ForwardRefExoticComponent<import("component/types").FlexLineProps & import("react").RefAttributes<HTMLDivElement>>>;
    export const JsxArguments: ComponentStory<import("react").ForwardRefExoticComponent<import("component/types").FlexLineProps & import("react").RefAttributes<HTMLDivElement>>>;
}
declare module "component/presets/index" {
    export type FlexLinePresets = {};
    export const flexlinePresets: FlexLinePresets;
}
