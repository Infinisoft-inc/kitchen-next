/// <reference types="react" />
declare module "component/types" {
    import React from 'react';
    export type DrawerProps = {
        children: React.ReactNode;
        visible?: boolean;
    } & Partial<React.HTMLProps<HTMLSpanElement>>;
}
declare module "component/index" {
    import './index.module.css';
    import { DrawerProps } from "component/types";
    const Drawer: ({ children, visible, ...props }: DrawerProps) => JSX.Element;
    export default Drawer;
}
declare module "bootstrap" { }
declare module "component/presets/index" {
    export type DrawerPresets = {};
    export const drawerPresets: DrawerPresets;
}
