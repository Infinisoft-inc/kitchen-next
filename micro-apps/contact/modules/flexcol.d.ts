/// <reference types="react" />
declare module "component/types" {
    import React from "react";
    export type FlexColProps = {
        children?: React.ReactNode;
    };
}
declare module "flexcol/FlexCol" {
    /**
     * Copyright © All rights reserved 2022
     * Infinisoft Inc.
     * www.infini-soft.com
     *
     * Module Federated Micro Component
     */
    import React from 'react';
    import { FlexColProps } from "component/types";
    const _default: React.ForwardRefExoticComponent<FlexColProps & React.RefAttributes<HTMLDivElement>>;
    export default _default;
}
declare module "bootstrap" { }
declare module "component/index.stories" {
    import { ComponentMeta, ComponentStory } from '@storybook/react';
    import React from 'react';
    const _default_1: ComponentMeta<React.ForwardRefExoticComponent<import("component/types").FlexColProps & React.RefAttributes<HTMLDivElement>>>;
    export default _default_1;
    export const StringArgs: ComponentStory<React.ForwardRefExoticComponent<import("component/types").FlexColProps & React.RefAttributes<HTMLDivElement>>>;
    export const LeftRightPropsArgs: ComponentStory<React.ForwardRefExoticComponent<import("component/types").FlexColProps & React.RefAttributes<HTMLDivElement>>>;
}
declare module "component/presets/index" {
    export type FlexColPresets = {};
    export const flexcolPresets: FlexColPresets;
}
