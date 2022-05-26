/// <reference types="react" />
declare module "assets/svg" {
    type Svgsize = {
        size?: number;
    };
    export const BackArrow: () => JSX.Element;
    export const SubcategoryIcon: () => JSX.Element;
    export const CategoryIcon: ({ size }: Svgsize) => JSX.Element;
    export const ContactIcon: () => JSX.Element;
    export const WebIcon: () => JSX.Element;
    export const AddressIcon: () => JSX.Element;
    export const EmailIcon: () => JSX.Element;
    export const NameIcon: () => JSX.Element;
    export const PhoneIcon: () => JSX.Element;
    export const RelatedwithIcon: () => JSX.Element;
    export const DeleteIcon: () => JSX.Element;
    export const AddIcon: () => JSX.Element;
}
declare module "component/types" {
    export type CrudListProps = Partial<HTMLElement> & {
        field: string;
        title: string;
        list: string[];
        icon: React.ReactNode;
        readonly: boolean;
        onRender?: <T = any>(val: T) => string;
        onChange?: (val: string, index?: number) => void;
        onAdd?: () => void;
        onDelete?: (index: number) => () => void;
    };
}
declare module "crudlist/CrudList" {
    import React from 'react';
    const _default: React.ForwardRefExoticComponent<Partial<HTMLElement> & {
        field: string;
        title: string;
        list: string[];
        icon: React.ReactNode;
        readonly: boolean;
        onRender?: (<T = any>(val: T) => string) | undefined;
        onChange?: ((val: string, index?: number | undefined) => void) | undefined;
        onAdd?: (() => void) | undefined;
        onDelete?: ((index: number) => () => void) | undefined;
    } & React.RefAttributes<unknown>>;
    export default _default;
}
declare module "bootstrap" { }
declare module "component/presets/index" {
    export type CrudListPresets = {};
    export const crudlistPresets: CrudListPresets;
}
