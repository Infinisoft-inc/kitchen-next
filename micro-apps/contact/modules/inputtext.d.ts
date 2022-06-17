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
     * Multiline
     */
    multiline?: boolean;
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
  } & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>;
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
    multiline?: boolean | undefined;
    ghost?: boolean | undefined;
    copyable?: boolean | undefined;
    removable?: boolean | undefined;
    onRemove?: (<T>(...arg: T[]) => void) | undefined;
    before?: React.ReactNode;
    after?: React.ReactNode;
    invalidMessage?: string | undefined;
  } & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & React.RefAttributes<HTMLInputElement>>;
  export default _default;
}
declare module "bootstrap" { }
declare module "component/index.stories" {
  import { ComponentMeta, ComponentStory } from '@storybook/react';
  import React from 'react';
  const _default_1: ComponentMeta<React.ForwardRefExoticComponent<{
    variant?: string | undefined;
    multiline?: boolean | undefined;
    ghost?: boolean | undefined;
    copyable?: boolean | undefined;
    removable?: boolean | undefined;
    onRemove?: (<T>(...arg: T[]) => void) | undefined;
    before?: React.ReactNode;
    after?: React.ReactNode;
    invalidMessage?: string | undefined;
  } & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & React.RefAttributes<HTMLInputElement>>>;
  export default _default_1;
  export const Primary: ComponentStory<React.ForwardRefExoticComponent<{
    variant?: string | undefined;
    multiline?: boolean | undefined;
    ghost?: boolean | undefined;
    copyable?: boolean | undefined;
    removable?: boolean | undefined;
    onRemove?: (<T>(...arg: T[]) => void) | undefined;
    before?: React.ReactNode;
    after?: React.ReactNode;
    invalidMessage?: string | undefined;
  } & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & React.RefAttributes<HTMLInputElement>>>;
  export const Before: ComponentStory<React.ForwardRefExoticComponent<{
    variant?: string | undefined;
    multiline?: boolean | undefined;
    ghost?: boolean | undefined;
    copyable?: boolean | undefined;
    removable?: boolean | undefined;
    onRemove?: (<T>(...arg: T[]) => void) | undefined;
    before?: React.ReactNode;
    after?: React.ReactNode;
    invalidMessage?: string | undefined;
  } & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & React.RefAttributes<HTMLInputElement>>>;
  export const After: ComponentStory<React.ForwardRefExoticComponent<{
    variant?: string | undefined;
    multiline?: boolean | undefined;
    ghost?: boolean | undefined;
    copyable?: boolean | undefined;
    removable?: boolean | undefined;
    onRemove?: (<T>(...arg: T[]) => void) | undefined;
    before?: React.ReactNode;
    after?: React.ReactNode;
    invalidMessage?: string | undefined;
  } & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & React.RefAttributes<HTMLInputElement>>>;
  export const MyVariant: ComponentStory<React.ForwardRefExoticComponent<{
    variant?: string | undefined;
    multiline?: boolean | undefined;
    ghost?: boolean | undefined;
    copyable?: boolean | undefined;
    removable?: boolean | undefined;
    onRemove?: (<T>(...arg: T[]) => void) | undefined;
    before?: React.ReactNode;
    after?: React.ReactNode;
    invalidMessage?: string | undefined;
  } & React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> & React.RefAttributes<HTMLInputElement>>>;
}
declare module "component/presets/index" {
  export type InputTextPresets = {};
  export const inputtextPresets: InputTextPresets;
}