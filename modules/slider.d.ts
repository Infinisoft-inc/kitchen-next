/// <reference types="react" />
declare module "component/types" {
    export type Directions = 'left' | 'right';
    export type SliderProps = {
        /**
         * Slider ending position
         */
        direction?: Directions;
        /**
         * Styles
         */
        styleProps?: React.CSSProperties;
        children?: React.ReactNode;
    };
}
declare module "component/presets/direction" {
    import { Directions } from "component/types";
    export type PresetValues = {
        opacity: number;
        x: number;
    };
    export type DirectionPreset = {
        initial: PresetValues;
        animate: PresetValues;
        exit: PresetValues;
    };
    export type DirectionPresets = Record<Directions, DirectionPreset>;
    export const directionPreset: DirectionPresets;
}
declare module "slider/Slider" {
    import React from 'react';
    import { SliderProps } from "component/types";
    const _default: React.ForwardRefExoticComponent<SliderProps & React.RefAttributes<unknown>>;
    export default _default;
}
declare module "bootstrap" { }
declare module "component/index.stories" {
    import { ComponentMeta, ComponentStory } from '@storybook/react';
    import React from 'react';
    const _default_1: ComponentMeta<React.ForwardRefExoticComponent<import("component/types").SliderProps & React.RefAttributes<unknown>>>;
    export default _default_1;
    export const Left: ComponentStory<React.ForwardRefExoticComponent<import("component/types").SliderProps & React.RefAttributes<unknown>>>;
    export const Right: ComponentStory<React.ForwardRefExoticComponent<import("component/types").SliderProps & React.RefAttributes<unknown>>>;
}
declare module "component/presets/index" {
    export type SliderPresets = {};
    export const sliderPresets: SliderPresets;
}
