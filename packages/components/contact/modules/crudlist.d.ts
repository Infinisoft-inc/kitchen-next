/// <reference types="react" />
declare module "component/assets/svg" {
    export const PhoneIcon: () => JSX.Element;
    export const DeleteIcon: () => JSX.Element;
    export const AddIcon: () => JSX.Element;
}
declare module "component/types" {
    import { InputTextProps } from "component/types";
    import React from "react";
    /**
     * CrudList Props
     */
    type Crud<T = any, I = any> = {
        itemList?: T[];
        onAdd?: (newValue?: T) => void;
        onChangeItem?: (newValue: T, id: I) => void;
        onRemove?: (id: I) => void;
    };
    export type CrudListProps<T = any, I = any> = Partial<HTMLInputElement> & Crud<T, I> & Partial<InputTextProps> & {
        /**
         * List title
         */
        listTitle?: React.ReactNode;
        /**
         * Title Icon
         */
        icon?: React.ReactNode;
        /**
         * Custom render
         */
        itemRender?: (item: T, index: number, array: T[]) => React.ReactNode;
    };
}
declare module "crudlist/CrudList" {
    import { CrudListProps } from "component/types";
    export const CrudList: ({ listTitle, icon, itemList, onAdd, onChangeItem, onRemove, itemRender, label, placeholder, ...props }: CrudListProps) => JSX.Element;
    export default CrudList;
}
declare module "bootstrap" { }
declare module "component/index.stories" {
    import { ComponentMeta, ComponentStory } from '@storybook/react';
    const _default: ComponentMeta<({ listTitle, icon, itemList, onAdd, onChangeItem, onRemove, itemRender, label, placeholder, ...props }: import("component/types").CrudListProps<any, any>) => JSX.Element>;
    export default _default;
    export const Example: ComponentStory<({ listTitle, icon, itemList, onAdd, onChangeItem, onRemove, itemRender, label, placeholder, ...props }: import("component/types").CrudListProps<any, any>) => JSX.Element>;
}
declare module "component/presets/index" {
    export type CrudListPresets = {};
    export const crudlistPresets: CrudListPresets;
}
