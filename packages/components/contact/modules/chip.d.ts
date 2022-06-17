/// <reference types="react" />
declare module "component/assets/index" {
    type Svgsize = {
        size?: number;
    };
    export const DeleteIcon: ({ size }: Svgsize) => JSX.Element;
}
declare module "component/types" {
    import React from "react";
    export type ChipProps = Partial<React.HTMLAttributes<HTMLDivElement>> & {
        children?: React.ReactNode;
        onRemove?: () => void;
        onChange?: (arg: string) => void;
    };
}
declare module "chip/Chip" {
    import './index.module.css';
    import { ChipProps } from "component/types";
    const Chip: ({ onRemove, children, onChange, ...props }: ChipProps) => JSX.Element;
    export default Chip;
}
declare module "bootstrap" { }
declare module "component/presets/index" {
    export type ChipPresets = {};
    export const chipPresets: ChipPresets;
}
