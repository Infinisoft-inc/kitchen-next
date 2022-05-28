/// <reference types="react" />
declare module "component/assets/svg" {
    export const PhoneIcon: () => JSX.Element;
    export const DeleteIcon: () => JSX.Element;
    export const AddIcon: () => JSX.Element;
}
declare module "crudlist/CrudList" {
    /**
     * Copyright © All rights reserved 2022
     * Infinisoft Inc.
     * www.infini-soft.com
     *
     * CrudList Federated Micro Component
     */
    import React from 'react';
    type IStore<T = unknown> = {
        subscribe: (onStoreChange: () => void) => () => void;
        getSnapshot: () => T[];
        getServerSnapshot?: () => T[];
    } & ICrud<T>;
    type ICrud<T = unknown> = {
        add: (item: T) => void;
        change: (val: T, index: number) => void;
        remove: (item: number) => void;
    };
    export const createstore: <T>(init?: T[] | undefined) => IStore<T>;
    export const CrudList: ({ title, icon, mystore }: {
        title: string;
        icon: React.ReactNode;
        mystore: IStore<string>;
    }) => JSX.Element;
    export default CrudList;
}
declare module "bootstrap" { }
declare module "component/index.stories" {
    import { ComponentMeta, ComponentStory } from '@storybook/react';
    import React from 'react';
    const _default: ComponentMeta<({ title, icon, mystore }: {
        title: string;
        icon: React.ReactNode;
        mystore: {
            subscribe: (onStoreChange: () => void) => () => void;
            getSnapshot: () => string[];
            getServerSnapshot?: (() => string[]) | undefined;
        } & {
            add: (item: string) => void;
            change: (val: string, index: number) => void;
            remove: (item: number) => void;
        };
    }) => JSX.Element>;
    export default _default;
    export const StringArgs: ComponentStory<({ title, icon, mystore }: {
        title: string;
        icon: React.ReactNode;
        mystore: {
            subscribe: (onStoreChange: () => void) => () => void;
            getSnapshot: () => string[];
            getServerSnapshot?: (() => string[]) | undefined;
        } & {
            add: (item: string) => void;
            change: (val: string, index: number) => void;
            remove: (item: number) => void;
        };
    }) => JSX.Element>;
}
declare module "component/types" {
    import React from "react";
    /**
     * CrudList Props
     */
    export type CrudListProps = Partial<HTMLElement> & {
        /**
         * List title
         */
        title: React.ReactNode;
        icon: React.ReactNode;
    };
}
declare module "component/presets/index" {
    export type CrudListPresets = {};
    export const crudlistPresets: CrudListPresets;
}
