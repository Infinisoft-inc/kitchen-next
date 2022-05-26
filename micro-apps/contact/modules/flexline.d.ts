/// <reference types="react" />
declare module "component/types" {
    export type FlexLineProps = {
        left?: React.ReactNode;
        right?: React.ReactNode;
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
    export const FlexLine: React.FC<FlexLineProps>;
    export default FlexLine;
}
declare module "bootstrap" { }
declare module "component/index.stories" {
    import { ComponentMeta, ComponentStory } from '@storybook/react';
    const _default: ComponentMeta<import("react").FC<import("component/types").FlexLineProps>>;
    export default _default;
    export const JsxArguments: ComponentStory<import("react").FC<import("component/types").FlexLineProps>>;
    export const StringArgs: ComponentStory<import("react").FC<import("component/types").FlexLineProps>>;
}
