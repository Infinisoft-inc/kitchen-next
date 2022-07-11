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
         * inverse theme colors
         */
        inverse?: boolean;
        /**
         * containerProps
         */
        containerProps?: Partial<React.FieldsetHTMLAttributes<HTMLFieldSetElement>>;
        /**
         * Add css class to container
         */
        containerClass?: string;
        /**
         * inputProps
         */
        inputProps?: Partial<React.InputHTMLAttributes<HTMLInputElement>>;
        /**
         * Add css class to container
         */
        inputClass?: string;
    } & Partial<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>>;
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
        inverse?: boolean | undefined;
        containerProps?: Partial<React.FieldsetHTMLAttributes<HTMLFieldSetElement>> | undefined;
        containerClass?: string | undefined;
        inputProps?: Partial<React.InputHTMLAttributes<HTMLInputElement>> | undefined;
        inputClass?: string | undefined;
    } & Partial<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>> & React.RefAttributes<HTMLInputElement>>;
    export default _default;
}
declare module "bootstrap" { }
declare module "component/assets/svg" {
    export const LocationIcon: () => JSX.Element;
    export const PhoneIcon: () => JSX.Element;
    export const DeleteIcon: () => JSX.Element;
    export const CopyIcon: () => JSX.Element;
}
declare module "component/index.stories" {
    import { ComponentMeta, ComponentStory } from '@storybook/react';
    const _default_1: ComponentMeta<import("react").ForwardRefExoticComponent<{
        multiline?: boolean | undefined;
        before?: import("react").ReactNode;
        after?: import("react").ReactNode;
        invalidMessage?: string | undefined;
        label?: string | undefined;
        placeholder?: string | undefined;
        inverse?: boolean | undefined;
        containerProps?: Partial<import("react").FieldsetHTMLAttributes<HTMLFieldSetElement>> | undefined;
        containerClass?: string | undefined;
        inputProps?: Partial<import("react").InputHTMLAttributes<HTMLInputElement>> | undefined;
        inputClass?: string | undefined;
    } & Partial<import("react").InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>> & import("react").RefAttributes<HTMLInputElement>>>;
    export default _default_1;
    export const Primary: ComponentStory<import("react").ForwardRefExoticComponent<{
        multiline?: boolean | undefined;
        before?: import("react").ReactNode;
        after?: import("react").ReactNode;
        invalidMessage?: string | undefined;
        label?: string | undefined;
        placeholder?: string | undefined;
        inverse?: boolean | undefined;
        containerProps?: Partial<import("react").FieldsetHTMLAttributes<HTMLFieldSetElement>> | undefined;
        containerClass?: string | undefined;
        inputProps?: Partial<import("react").InputHTMLAttributes<HTMLInputElement>> | undefined;
        inputClass?: string | undefined;
    } & Partial<import("react").InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>> & import("react").RefAttributes<HTMLInputElement>>>;
    export const Before: ComponentStory<import("react").ForwardRefExoticComponent<{
        multiline?: boolean | undefined;
        before?: import("react").ReactNode;
        after?: import("react").ReactNode;
        invalidMessage?: string | undefined;
        label?: string | undefined;
        placeholder?: string | undefined;
        inverse?: boolean | undefined;
        containerProps?: Partial<import("react").FieldsetHTMLAttributes<HTMLFieldSetElement>> | undefined;
        containerClass?: string | undefined;
        inputProps?: Partial<import("react").InputHTMLAttributes<HTMLInputElement>> | undefined;
        inputClass?: string | undefined;
    } & Partial<import("react").InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>> & import("react").RefAttributes<HTMLInputElement>>>;
    export const After: ComponentStory<import("react").ForwardRefExoticComponent<{
        multiline?: boolean | undefined;
        before?: import("react").ReactNode;
        after?: import("react").ReactNode;
        invalidMessage?: string | undefined;
        label?: string | undefined;
        placeholder?: string | undefined;
        inverse?: boolean | undefined;
        containerProps?: Partial<import("react").FieldsetHTMLAttributes<HTMLFieldSetElement>> | undefined;
        containerClass?: string | undefined;
        inputProps?: Partial<import("react").InputHTMLAttributes<HTMLInputElement>> | undefined;
        inputClass?: string | undefined;
    } & Partial<import("react").InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>> & import("react").RefAttributes<HTMLInputElement>>>;
}
declare module "component/presets/index" {
    export type InputTextPresets = {};
    export const inputtextPresets: InputTextPresets;
}
