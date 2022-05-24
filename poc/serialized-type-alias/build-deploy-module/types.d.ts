/// <reference types="react" />
declare module "component/index" {
    type Size = 'small' | 'large';
    type ButtonProps = {
        /**
         * message description
         */
        message?: string;
        backgroundColor?: string;
        size?: Size;
    };
    const Button: ({ message, backgroundColor, size, ...props }: ButtonProps) => JSX.Element;
    export default Button;
}
declare module "bootstrap" { }
declare module "component/index.stories" {
    import { ComponentMeta, ComponentStory } from '@storybook/react';
    const _default: ComponentMeta<({ message, backgroundColor, size, ...props }: {
        message?: string | undefined;
        backgroundColor?: string | undefined;
        size?: ("small" | "large") | undefined;
    }) => JSX.Element>;
    export default _default;
    export const Primary: ComponentStory<({ message, backgroundColor, size, ...props }: {
        message?: string | undefined;
        backgroundColor?: string | undefined;
        size?: ("small" | "large") | undefined;
    }) => JSX.Element>;
    export const Secondary: ComponentStory<({ message, backgroundColor, size, ...props }: {
        message?: string | undefined;
        backgroundColor?: string | undefined;
        size?: ("small" | "large") | undefined;
    }) => JSX.Element>;
}
