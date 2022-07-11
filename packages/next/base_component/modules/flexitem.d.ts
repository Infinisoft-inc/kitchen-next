/// <reference types="react" />
declare module "component/types" {
    export type FlexItemProps = {
        children: React.ReactNode;
    } & React.AllHTMLAttributes<HTMLDivElement>;
}
declare module "flexitem/FlexItem" {
    /**
     * Copyright © All rights reserved 2022
     * Infinisoft Inc.
     * www.infini-soft.com
     *
     * FlexItem Federated Micro Component
     */
    import React from 'react';
    const _default: React.ForwardRefExoticComponent<{
        children: React.ReactNode;
    } & React.AllHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
    export default _default;
}
declare module "bootstrap" { }
declare module "component/index.stories" {
    import { ComponentMeta, ComponentStory } from '@storybook/react';
    import React from 'react';
    const _default_1: ComponentMeta<React.ForwardRefExoticComponent<{
        children: React.ReactNode;
    } & React.AllHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>>;
    export default _default_1;
    export const Example: ComponentStory<React.ForwardRefExoticComponent<{
        children: React.ReactNode;
    } & React.AllHTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>>;
}
declare module "component/presets/index" {
    export type FlexItemPresets = {};
    export const flexitemPresets: FlexItemPresets;
}
