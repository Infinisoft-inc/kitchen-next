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
    import { FlexColProps } from "component/types";
  import React, { ForwardedRef } from 'react';
    export const FlexCol: (props: FlexColProps, ref: ForwardedRef<HTMLDivElement>) => JSX.Element;
    const _default: React.ForwardRefExoticComponent<FlexColProps & React.RefAttributes<HTMLDivElement>>;
    export default _default;
}
declare module "bootstrap" { }
declare module "component/presets/index" {
    export type FlexColPresets = {};
    export const flexcolPresets: FlexColPresets;
}
