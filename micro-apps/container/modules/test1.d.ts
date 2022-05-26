/// <reference types="react" />
declare module "component/types" {
    export type Size = 'small' | 'large';
    export type Test1Props = {
        message?: string;
        backgroundColor?: string;
        size?: Size;
    };
}
declare module "component/presets/size" {
    import { Size } from "component/types";
    export type SizePresets = {
        [P in Size]: {
            height: string;
            width: string;
        };
    };
    export const sizePresets: SizePresets;
}
declare module "test1/Test1" {
    import { Test1Props } from "component/types";
    const Test1: ({ message, backgroundColor, size, ...props }: Test1Props) => JSX.Element;
    export default Test1;
}
declare module "bootstrap" { }
declare module "component/index.stories" {
    import { ComponentMeta, ComponentStory } from '@storybook/react';
    const _default: ComponentMeta<({ message, backgroundColor, size, ...props }: import("component/types").Test1Props) => JSX.Element>;
    export default _default;
    export const Primary: ComponentStory<({ message, backgroundColor, size, ...props }: import("component/types").Test1Props) => JSX.Element>;
    export const Secondary: ComponentStory<({ message, backgroundColor, size, ...props }: import("component/types").Test1Props) => JSX.Element>;
}
