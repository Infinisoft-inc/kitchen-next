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
         * this attributes collide with @types/react and must be replaced by before
         */
        prefix?: React.ReactNode;
        before?: React.ReactNode;
        /**
       * Suffix component
       * this attributes collide with @types/react and must be replaced by after
       */
        suffix?: React.ReactNode;
        after?: React.ReactNode;
        /**
         * Unique identifier
         */
        key: React.Key;
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
    import 'index.module.css';
  import React from 'react';
    const _default: React.ForwardRefExoticComponent<{
        variant?: string | undefined;
        ghost?: boolean | undefined;
        copyable?: boolean | undefined;
        removable?: boolean | undefined;
        onRemove?: (<T>(...arg: T[]) => void) | undefined;
        prefix?: React.ReactNode;
        before?: React.ReactNode;
        suffix?: React.ReactNode;
        after?: React.ReactNode;
        key: React.Key;
    } & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>;
    export default _default;
}
declare module "bootstrap" { }
declare module "component/index.stories" {
    import { ComponentMeta, ComponentStory } from '@storybook/react';
  import React from 'react';
    const _default_1: ComponentMeta<React.ForwardRefExoticComponent<{
        variant?: string | undefined;
        ghost?: boolean | undefined;
        copyable?: boolean | undefined;
        removable?: boolean | undefined;
        onRemove?: (<T>(...arg: T[]) => void) | undefined;
        prefix?: React.ReactNode;
        before?: React.ReactNode;
        suffix?: React.ReactNode;
        after?: React.ReactNode;
        key: React.Key;
    } & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>>;
    export default _default_1;
    export const Primary: ComponentStory<React.ForwardRefExoticComponent<{
        variant?: string | undefined;
        ghost?: boolean | undefined;
        copyable?: boolean | undefined;
        removable?: boolean | undefined;
        onRemove?: (<T>(...arg: T[]) => void) | undefined;
        prefix?: React.ReactNode;
        before?: React.ReactNode;
        suffix?: React.ReactNode;
        after?: React.ReactNode;
        key: React.Key;
    } & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>>;
    export const Before: ComponentStory<React.ForwardRefExoticComponent<{
        variant?: string | undefined;
        ghost?: boolean | undefined;
        copyable?: boolean | undefined;
        removable?: boolean | undefined;
        onRemove?: (<T>(...arg: T[]) => void) | undefined;
        prefix?: React.ReactNode;
        before?: React.ReactNode;
        suffix?: React.ReactNode;
        after?: React.ReactNode;
        key: React.Key;
    } & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>>;
    export const After: ComponentStory<React.ForwardRefExoticComponent<{
        variant?: string | undefined;
        ghost?: boolean | undefined;
        copyable?: boolean | undefined;
        removable?: boolean | undefined;
        onRemove?: (<T>(...arg: T[]) => void) | undefined;
        prefix?: React.ReactNode;
        before?: React.ReactNode;
        suffix?: React.ReactNode;
        after?: React.ReactNode;
        key: React.Key;
    } & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>>;
    export const MyVariant: ComponentStory<React.ForwardRefExoticComponent<{
        variant?: string | undefined;
        ghost?: boolean | undefined;
        copyable?: boolean | undefined;
        removable?: boolean | undefined;
        onRemove?: (<T>(...arg: T[]) => void) | undefined;
        prefix?: React.ReactNode;
        before?: React.ReactNode;
        suffix?: React.ReactNode;
        after?: React.ReactNode;
        key: React.Key;
    } & React.InputHTMLAttributes<HTMLInputElement> & React.RefAttributes<HTMLInputElement>>>;
}
declare module "component/presets/index" {
    export type InputTextPresets = {};
    export const inputtextPresets: InputTextPresets;
}
