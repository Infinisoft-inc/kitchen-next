/// <reference types="react" />
declare module "component/types" {
    import React from "react";
    export type ToggleProps = Partial<React.HTMLAttributes<HTMLButtonElement>> & {
        /**
         * Callback onclick and pass it's value as argument
         */
        clickHandler: (term?: string) => void;
        /**
         * Toggle label list
         */
        toggles: string[];
    };
}
declare module "toggle/Toggle" {
    import { ToggleProps } from "component/types";
    /**
     * Toggle buttons
     * @param param0
     * @returns
     */
    const Toggle: ({ toggles, clickHandler, children, ...props }: ToggleProps) => JSX.Element;
    export default Toggle;
}
declare module "bootstrap" { }
declare module "component/index.stories" {
    import { ComponentMeta, ComponentStory } from '@storybook/react';
    const _default: ComponentMeta<({ toggles, clickHandler, children, ...props }: import("component/types").ToggleProps) => JSX.Element>;
    export default _default;
    export const StringArgs: ComponentStory<({ toggles, clickHandler, children, ...props }: import("component/types").ToggleProps) => JSX.Element>;
}
declare module "component/assets/index" {
    type Svgsize = {
        size?: number;
    };
    export const DeleteIcon: ({ size }: Svgsize) => JSX.Element;
}
declare module "component/presets/index" {
    export type TogglePresets = {};
    export const togglePresets: TogglePresets;
}
