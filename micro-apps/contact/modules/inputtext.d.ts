/// <reference types="react" />
declare module "component/assets/svg" {
    export const LocationIcon: () => JSX.Element;
    export const PhoneIcon: () => JSX.Element;
    export const DeleteIcon: () => JSX.Element;
    export const CopyIcon: () => JSX.Element;
}
declare module "component/types" {
    import React from "react";
    export type InputTextProps = {
        /**
         * variant
         */
        variant?: "primary" | 'secondary' | string;
        /**
         * Transparent background, no border
         */
        ghost?: boolean;
        /**
         * This element value is copyable in the clipboard
         */
        copyable?: boolean;
        /**
         * This element is removeable
         * Triggers onRemove
         */
        removable?: boolean;
        onRemove?: <T>(...arg: T[]) => void;
        /**
         * Prefix component
         */
        prefix?: React.ReactNode;
        /**
       * Suffix component
       */
        suffix?: React.ReactNode;
    } & React.InputHTMLAttributes<HTMLInputElement>;
}
declare module "inputtext/InputText" {
    /**
     * Copyright © All rights reserved 2022
     * Infinisoft Inc.
     * www.infini-soft.com
     *
     * InputText Federated Micro Component
     */
    import React from 'react';
  import './index.module.css';
    const _default: React.ForwardRefExoticComponent<{
        variant?: string | undefined;
        ghost?: boolean | undefined;
        copyable?: boolean | undefined;
        removable?: boolean | undefined;
        onRemove?: (<T>(...arg: T[]) => void) | undefined;
        prefix?: React.ReactNode | any;
        suffix?: React.ReactNode;
    } & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
    export default _default;
}
declare module "bootstrap" { }

declare module "component/presets/index" {
    export type InputTextPresets = {};
    export const inputtextPresets: InputTextPresets;
}
