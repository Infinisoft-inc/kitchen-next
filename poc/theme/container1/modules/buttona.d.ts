/// <reference types="react" />
declare module "component/presets/index" {
    export type VariantButton = "filled" | "outlined";
    export type ButtonAPresets = Record<VariantButton, keyof typeof color>;
    export const buttonaPresets: ButtonAPresets;
    const color: {
        "md_sys_color_surface-tint": {
            value: string;
        };
        "md_sys_color_surface-tint-color": {
            value: string;
        };
        "md_sys_color_on-error-container": {
            value: string;
        };
        "md_sys_color_on-error": {
            value: string;
        };
        "md_sys_color_error-container": {
            value: string;
        };
        "md_sys_color_on-tertiary-container": {
            value: string;
        };
        "md_sys_color_on-tertiary": {
            value: string;
        };
        "md_sys_color_tertiary-container": {
            value: string;
        };
        md_sys_color_tertiary: {
            value: string;
        };
        md_sys_color_shadow: {
            value: string;
        };
        md_sys_color_error: {
            value: string;
        };
        md_sys_color_outline: {
            value: string;
        };
        "md_sys_color_on-background": {
            value: string;
        };
        md_sys_color_background: {
            value: string;
        };
        "md_sys_color_inverse-on-surface": {
            value: string;
        };
        "md_sys_color_inverse-surface": {
            value: string;
        };
        "md_sys_color_on-surface-variant": {
            value: string;
        };
        "md_sys_color_on-surface": {
            value: string;
        };
        "md_sys_color_surface-variant": {
            value: string;
        };
        md_sys_color_surface: {
            value: string;
        };
        "md_sys_color_on-secondary-container": {
            value: string;
        };
        "md_sys_color_on-secondary": {
            value: string;
        };
        "md_sys_color_secondary-container": {
            value: string;
        };
        md_sys_color_secondary: {
            value: string;
        };
        "md_sys_color_inverse-primary": {
            value: string;
        };
        "md_sys_color_on-primary-container": {
            value: string;
        };
        "md_sys_color_on-primary": {
            value: string;
        };
        "md_sys_color_primary-container": {
            value: string;
        };
        md_sys_color_primary: {
            value: string;
        };
        "md_sys_color_surface-tint_light": {
            value: string;
        };
        "md_sys_color_surface-tint-color_light": {
            value: string;
        };
        "md_sys_color_on-error-container_light": {
            value: string;
        };
        "md_sys_color_on-error_light": {
            value: string;
        };
        "md_sys_color_error-container_light": {
            value: string;
        };
        "md_sys_color_on-tertiary-container_light": {
            value: string;
        };
        "md_sys_color_on-tertiary_light": {
            value: string;
        };
        "md_sys_color_tertiary-container_light": {
            value: string;
        };
        md_sys_color_tertiary_light: {
            value: string;
        };
        md_sys_color_shadow_light: {
            value: string;
        };
        md_sys_color_error_light: {
            value: string;
        };
        md_sys_color_outline_light: {
            value: string;
        };
        "md_sys_color_on-background_light": {
            value: string;
        };
        md_sys_color_background_light: {
            value: string;
            comment: string;
        };
        "md_sys_color_inverse-on-surface_light": {
            value: string;
        };
        "md_sys_color_inverse-surface_light": {
            value: string;
        };
        "md_sys_color_on-surface-variant_light": {
            value: string;
        };
        "md_sys_color_on-surface_light": {
            value: string;
        };
        "md_sys_color_surface-variant_light": {
            value: string;
        };
        md_sys_color_surface_light: {
            value: string;
        };
        "md_sys_color_on-secondary-container_light": {
            value: string;
        };
        "md_sys_color_on-secondary_light": {
            value: string;
        };
        "md_sys_color_secondary-container_light": {
            value: string;
        };
        md_sys_color_secondary_light: {
            value: string;
        };
        "md_sys_color_inverse-primary_light": {
            value: string;
        };
        "md_sys_color_on-primary-container_light": {
            value: string;
        };
        "md_sys_color_on-primary_light": {
            value: string;
        };
        "md_sys_color_primary-container_light": {
            value: string;
        };
        md_sys_color_primary_light: {
            value: string;
        };
        "md_sys_color_surface-tint_dark": {
            value: string;
        };
        "md_sys_color_surface-tint-color_dark": {
            value: string;
        };
        "md_sys_color_on-error-container_dark": {
            value: string;
        };
        "md_sys_color_on-error_dark": {
            value: string;
        };
        "md_sys_color_error-container_dark": {
            value: string;
        };
        "md_sys_color_on-tertiary-container_dark": {
            value: string;
        };
        "md_sys_color_on-tertiary_dark": {
            value: string;
        };
        "md_sys_color_tertiary-container_dark": {
            value: string;
        };
        md_sys_color_tertiary_dark: {
            value: string;
        };
        md_sys_color_shadow_dark: {
            value: string;
        };
        md_sys_color_error_dark: {
            value: string;
        };
        md_sys_color_outline_dark: {
            value: string;
        };
        "md_sys_color_on-background_dark": {
            value: string;
        };
        md_sys_color_background_dark: {
            value: string;
        };
        "md_sys_color_inverse-on-surface_dark": {
            value: string;
        };
        "md_sys_color_inverse-surface_dark": {
            value: string;
        };
        "md_sys_color_on-surface-variant_dark": {
            value: string;
        };
        "md_sys_color_on-surface_dark": {
            value: string;
        };
        "md_sys_color_surface-variant_dark": {
            value: string;
        };
        md_sys_color_surface_dark: {
            value: string;
        };
        "md_sys_color_on-secondary-container_dark": {
            value: string;
        };
        "md_sys_color_on-secondary_dark": {
            value: string;
        };
        "md_sys_color_secondary-container_dark": {
            value: string;
        };
        md_sys_color_secondary_dark: {
            value: string;
        };
        "md_sys_color_inverse-primary_dark": {
            value: string;
        };
        "md_sys_color_on-primary-container_dark": {
            value: string;
        };
        "md_sys_color_on-primary_dark": {
            value: string;
        };
        "md_sys_color_primary-container_dark": {
            value: string;
        };
        md_sys_color_primary_dark: {
            value: string;
        };
        md_ref_palette_primary0: {
            value: string;
        };
        md_ref_palette_primary10: {
            value: string;
        };
        md_ref_palette_primary20: {
            value: string;
        };
        md_ref_palette_primary30: {
            value: string;
        };
        md_ref_palette_primary40: {
            value: string;
        };
        md_ref_palette_primary50: {
            value: string;
        };
        md_ref_palette_primary60: {
            value: string;
        };
        md_ref_palette_primary70: {
            value: string;
        };
        md_ref_palette_primary80: {
            value: string;
        };
        md_ref_palette_primary90: {
            value: string;
        };
        md_ref_palette_primary95: {
            value: string;
        };
        md_ref_palette_primary99: {
            value: string;
        };
        md_ref_palette_primary100: {
            value: string;
        };
        md_ref_palette_secondary0: {
            value: string;
        };
        md_ref_palette_secondary10: {
            value: string;
        };
        md_ref_palette_secondary20: {
            value: string;
        };
        md_ref_palette_secondary30: {
            value: string;
        };
        md_ref_palette_secondary40: {
            value: string;
        };
        md_ref_palette_secondary50: {
            value: string;
        };
        md_ref_palette_secondary60: {
            value: string;
        };
        md_ref_palette_secondary70: {
            value: string;
        };
        md_ref_palette_secondary80: {
            value: string;
        };
        md_ref_palette_secondary90: {
            value: string;
        };
        md_ref_palette_secondary95: {
            value: string;
        };
        md_ref_palette_secondary99: {
            value: string;
        };
        md_ref_palette_secondary100: {
            value: string;
        };
        md_ref_palette_tertiary0: {
            value: string;
        };
        md_ref_palette_tertiary10: {
            value: string;
        };
        md_ref_palette_tertiary20: {
            value: string;
        };
        md_ref_palette_tertiary30: {
            value: string;
        };
        md_ref_palette_tertiary40: {
            value: string;
        };
        md_ref_palette_tertiary50: {
            value: string;
        };
        md_ref_palette_tertiary60: {
            value: string;
        };
        md_ref_palette_tertiary70: {
            value: string;
        };
        md_ref_palette_tertiary80: {
            value: string;
        };
        md_ref_palette_tertiary90: {
            value: string;
        };
        md_ref_palette_tertiary95: {
            value: string;
        };
        md_ref_palette_tertiary99: {
            value: string;
        };
        md_ref_palette_tertiary100: {
            value: string;
        };
        md_ref_palette_neutral0: {
            value: string;
        };
        md_ref_palette_neutral10: {
            value: string;
        };
        md_ref_palette_neutral20: {
            value: string;
        };
        md_ref_palette_neutral30: {
            value: string;
        };
        md_ref_palette_neutral40: {
            value: string;
        };
        md_ref_palette_neutral50: {
            value: string;
        };
        md_ref_palette_neutral60: {
            value: string;
        };
        md_ref_palette_neutral70: {
            value: string;
        };
        md_ref_palette_neutral80: {
            value: string;
        };
        md_ref_palette_neutral90: {
            value: string;
        };
        md_ref_palette_neutral95: {
            value: string;
        };
        md_ref_palette_neutral99: {
            value: string;
        };
        md_ref_palette_neutral100: {
            value: string;
        };
        md_ref_palette_neutralNaN: {
            value: string;
        };
        "md_ref_palette_neutral-variant0": {
            value: string;
        };
        "md_ref_palette_neutral-variant10": {
            value: string;
        };
        "md_ref_palette_neutral-variant20": {
            value: string;
        };
        "md_ref_palette_neutral-variant30": {
            value: string;
        };
        "md_ref_palette_neutral-variant40": {
            value: string;
        };
        "md_ref_palette_neutral-variant50": {
            value: string;
        };
        "md_ref_palette_neutral-variant60": {
            value: string;
        };
        "md_ref_palette_neutral-variant70": {
            value: string;
        };
        "md_ref_palette_neutral-variant80": {
            value: string;
        };
        "md_ref_palette_neutral-variant90": {
            value: string;
        };
        "md_ref_palette_neutral-variant95": {
            value: string;
        };
        "md_ref_palette_neutral-variant99": {
            value: string;
        };
        "md_ref_palette_neutral-variant100": {
            value: string;
        };
        md_ref_palette_error0: {
            value: string;
        };
        md_ref_palette_error10: {
            value: string;
        };
        md_ref_palette_error20: {
            value: string;
        };
        md_ref_palette_error30: {
            value: string;
        };
        md_ref_palette_error40: {
            value: string;
        };
        md_ref_palette_error50: {
            value: string;
        };
        md_ref_palette_error60: {
            value: string;
        };
        md_ref_palette_error70: {
            value: string;
        };
        md_ref_palette_error80: {
            value: string;
        };
        md_ref_palette_error90: {
            value: string;
        };
        md_ref_palette_error95: {
            value: string;
        };
        md_ref_palette_error99: {
            value: string;
        };
        md_ref_palette_error100: {
            value: string;
        };
    };
    export type ThemeMode = "dark" | "light";
    export const themeMode: ThemeMode;
    export const getToken: <K extends "md_sys_color_surface-tint" | "md_sys_color_surface-tint-color" | "md_sys_color_on-error-container" | "md_sys_color_on-error" | "md_sys_color_error-container" | "md_sys_color_on-tertiary-container" | "md_sys_color_on-tertiary" | "md_sys_color_tertiary-container" | "md_sys_color_tertiary" | "md_sys_color_shadow" | "md_sys_color_error" | "md_sys_color_outline" | "md_sys_color_on-background" | "md_sys_color_background" | "md_sys_color_inverse-on-surface" | "md_sys_color_inverse-surface" | "md_sys_color_on-surface-variant" | "md_sys_color_on-surface" | "md_sys_color_surface-variant" | "md_sys_color_surface" | "md_sys_color_on-secondary-container" | "md_sys_color_on-secondary" | "md_sys_color_secondary-container" | "md_sys_color_secondary" | "md_sys_color_inverse-primary" | "md_sys_color_on-primary-container" | "md_sys_color_on-primary" | "md_sys_color_primary-container" | "md_sys_color_primary" | "md_sys_color_surface-tint_light" | "md_sys_color_surface-tint-color_light" | "md_sys_color_on-error-container_light" | "md_sys_color_on-error_light" | "md_sys_color_error-container_light" | "md_sys_color_on-tertiary-container_light" | "md_sys_color_on-tertiary_light" | "md_sys_color_tertiary-container_light" | "md_sys_color_tertiary_light" | "md_sys_color_shadow_light" | "md_sys_color_error_light" | "md_sys_color_outline_light" | "md_sys_color_on-background_light" | "md_sys_color_background_light" | "md_sys_color_inverse-on-surface_light" | "md_sys_color_inverse-surface_light" | "md_sys_color_on-surface-variant_light" | "md_sys_color_on-surface_light" | "md_sys_color_surface-variant_light" | "md_sys_color_surface_light" | "md_sys_color_on-secondary-container_light" | "md_sys_color_on-secondary_light" | "md_sys_color_secondary-container_light" | "md_sys_color_secondary_light" | "md_sys_color_inverse-primary_light" | "md_sys_color_on-primary-container_light" | "md_sys_color_on-primary_light" | "md_sys_color_primary-container_light" | "md_sys_color_primary_light" | "md_sys_color_surface-tint_dark" | "md_sys_color_surface-tint-color_dark" | "md_sys_color_on-error-container_dark" | "md_sys_color_on-error_dark" | "md_sys_color_error-container_dark" | "md_sys_color_on-tertiary-container_dark" | "md_sys_color_on-tertiary_dark" | "md_sys_color_tertiary-container_dark" | "md_sys_color_tertiary_dark" | "md_sys_color_shadow_dark" | "md_sys_color_error_dark" | "md_sys_color_outline_dark" | "md_sys_color_on-background_dark" | "md_sys_color_background_dark" | "md_sys_color_inverse-on-surface_dark" | "md_sys_color_inverse-surface_dark" | "md_sys_color_on-surface-variant_dark" | "md_sys_color_on-surface_dark" | "md_sys_color_surface-variant_dark" | "md_sys_color_surface_dark" | "md_sys_color_on-secondary-container_dark" | "md_sys_color_on-secondary_dark" | "md_sys_color_secondary-container_dark" | "md_sys_color_secondary_dark" | "md_sys_color_inverse-primary_dark" | "md_sys_color_on-primary-container_dark" | "md_sys_color_on-primary_dark" | "md_sys_color_primary-container_dark" | "md_sys_color_primary_dark" | "md_ref_palette_primary0" | "md_ref_palette_primary10" | "md_ref_palette_primary20" | "md_ref_palette_primary30" | "md_ref_palette_primary40" | "md_ref_palette_primary50" | "md_ref_palette_primary60" | "md_ref_palette_primary70" | "md_ref_palette_primary80" | "md_ref_palette_primary90" | "md_ref_palette_primary95" | "md_ref_palette_primary99" | "md_ref_palette_primary100" | "md_ref_palette_secondary0" | "md_ref_palette_secondary10" | "md_ref_palette_secondary20" | "md_ref_palette_secondary30" | "md_ref_palette_secondary40" | "md_ref_palette_secondary50" | "md_ref_palette_secondary60" | "md_ref_palette_secondary70" | "md_ref_palette_secondary80" | "md_ref_palette_secondary90" | "md_ref_palette_secondary95" | "md_ref_palette_secondary99" | "md_ref_palette_secondary100" | "md_ref_palette_tertiary0" | "md_ref_palette_tertiary10" | "md_ref_palette_tertiary20" | "md_ref_palette_tertiary30" | "md_ref_palette_tertiary40" | "md_ref_palette_tertiary50" | "md_ref_palette_tertiary60" | "md_ref_palette_tertiary70" | "md_ref_palette_tertiary80" | "md_ref_palette_tertiary90" | "md_ref_palette_tertiary95" | "md_ref_palette_tertiary99" | "md_ref_palette_tertiary100" | "md_ref_palette_neutral0" | "md_ref_palette_neutral10" | "md_ref_palette_neutral20" | "md_ref_palette_neutral30" | "md_ref_palette_neutral40" | "md_ref_palette_neutral50" | "md_ref_palette_neutral60" | "md_ref_palette_neutral70" | "md_ref_palette_neutral80" | "md_ref_palette_neutral90" | "md_ref_palette_neutral95" | "md_ref_palette_neutral99" | "md_ref_palette_neutral100" | "md_ref_palette_neutralNaN" | "md_ref_palette_neutral-variant0" | "md_ref_palette_neutral-variant10" | "md_ref_palette_neutral-variant20" | "md_ref_palette_neutral-variant30" | "md_ref_palette_neutral-variant40" | "md_ref_palette_neutral-variant50" | "md_ref_palette_neutral-variant60" | "md_ref_palette_neutral-variant70" | "md_ref_palette_neutral-variant80" | "md_ref_palette_neutral-variant90" | "md_ref_palette_neutral-variant95" | "md_ref_palette_neutral-variant99" | "md_ref_palette_neutral-variant100" | "md_ref_palette_error0" | "md_ref_palette_error10" | "md_ref_palette_error20" | "md_ref_palette_error30" | "md_ref_palette_error40" | "md_ref_palette_error50" | "md_ref_palette_error60" | "md_ref_palette_error70" | "md_ref_palette_error80" | "md_ref_palette_error90" | "md_ref_palette_error95" | "md_ref_palette_error99" | "md_ref_palette_error100">(_token: K) => {
        token: string;
        value: string;
    };
    export type Context = {
        dynamicStyle: string;
        getToken: typeof getToken;
    };
}
declare module "component/types" {
    import { Context, ThemeMode, VariantButton } from "component/presets/index";
    import React from "react";
    export type ButtonAProps = {
        children: React.ReactNode;
        variant?: VariantButton;
        title?: string;
        content?: string;
        context?: Context;
        mode?: ThemeMode;
    };
    export type ButtonProps = {
        variant: VariantButton;
    };
}
declare module "component/component" {
    import { ButtonAProps } from "component/types";
    const _default: import("react").ForwardRefExoticComponent<ButtonAProps & import("react").RefAttributes<unknown>>;
    export default _default;
}
declare module "buttona/ButtonA" {
    /**
     * Copyright © All rights reserved 2022
     * Infinisoft Inc.
     * www.infini-soft.com
     *
     * PocButtonA Federated Micro Component
     */
    import { ButtonAProps } from "component/types";
    import React from 'react';
    const _default_1: React.ForwardRefExoticComponent<ButtonAProps & React.RefAttributes<unknown>>;
    export default _default_1;
}
declare module "bootstrap" { }
