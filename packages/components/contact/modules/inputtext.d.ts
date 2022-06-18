/// <reference types="react" />
declare module "component/types" {
    import React from "react";
    export type InputTextProps = {
        /**
         * Multiline
         */
        multiline?: boolean;
        /**
         * Before component
         * this attributes collide with @types/react and must be replaced by before
         */
        before?: React.ReactNode;
        /**
       * After component
       * this attributes collide with @types/react and must be replaced by after
       */
        after?: React.ReactNode;
        /**
         * Invalid component
         */
        invalidMessage?: string;
        /**
         * label
         */
        label?: string;
        /**
         * input Placeholder
         */
        placeholder?: string;
        /**
       * Props passed down to input or textarea
       */
        inputProps?: Partial<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>>;
    } & Partial<React.InputHTMLAttributes<HTMLFieldSetElement>>;
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
    const _default: React.ForwardRefExoticComponent<{
        multiline?: boolean | undefined;
        before?: React.ReactNode;
        after?: React.ReactNode;
        invalidMessage?: string | undefined;
        label?: string | undefined;
        placeholder?: string | undefined;
        inputProps?: Partial<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>> | undefined;
    } & Partial<React.InputHTMLAttributes<HTMLFieldSetElement  | HTMLInputElement>> & React.RefAttributes<HTMLInputElement>>;
    export default _default;
}
declare module "bootstrap" { }
declare module "component/assets/svg" {
    export const LocationIcon: () => JSX.Element;
    export const PhoneIcon: () => JSX.Element;
    export const DeleteIcon: () => JSX.Element;
    export const CopyIcon: () => JSX.Element;
}

declare module "component/presets/index" {
    export type InputTextPresets = {};
    export const inputtextPresets: InputTextPresets;
}
