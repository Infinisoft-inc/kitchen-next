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
    import { FlexLineProps } from "component/types";
  import React from 'react';
    export const FlexLine: React.FC<FlexLineProps>;
    export default FlexLine;
}
