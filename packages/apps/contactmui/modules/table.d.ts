/// <reference types="react" />
declare module "component/types" {
    /**
     * Table Options
     */
    export type TableOptions = {
        pagination?: boolean;
        rowPerPage?: number;
    };
    /**
     * Table configuration
     */
    export type TableConfig<T> = Partial<Record<Partial<keyof T>, TableRowConfig<T>>>;
    /**
     * Row config
     */
    export type TableRowConfig<T> = {
        /**
         * Show column from `value` and upper
         */
        responsive?: "xs" | "sm" | "md" | "lg" | "lg";
        /**
         * Custom cell render
         */
        render?: (row: T) => React.ReactNode;
    };
    /**
     * Table props
     */
    export type TableProps<T> = {
        /**
         * Columns config
         */
        columns: Record<string, TableRowConfig<T>>;
        /**
         * Data map
         */
        data?: Record<string, T>;
        /**
         * Table options
         */
        options?: TableOptions;
    };
    export type PaginatorProps<T> = {
        /**
         * Row per page
         */
        rowPerPage: number;
        /**
         * Next pagination token
         */
        nextToken?: string | number;
        /**
         * Total number records
         */
        count?: number;
    };
}
declare module "component/deps/usePaginator" {
    import { PaginatorProps } from "component/types";
    export const usePaginator: <T>({ rowPerPage, count, nextToken }: PaginatorProps<T>) => {
        _numberOfPage: number;
        handleBackPage: () => void;
        handleGotoPage: (_page: number) => void;
        handleNextPage: () => void;
        currentPage: number;
        paginate: <T_1>(_list?: Record<string, T_1> | undefined) => {
            [x: string]: T_1;
        };
    };
    export default usePaginator;
}
declare module "component/deps/paginator" {
    const Paginator: <T>({ numberOfPage, handleGotoPage, currentPage }: any) => JSX.Element;
    export default Paginator;
}
declare module "table/Table" {
    import { TableProps } from "component/types";
    const Table: <T>({ columns, data, options }: TableProps<T>) => JSX.Element;
    export default Table;
}
declare module "bootstrap" { }
declare module "component/index.stories" {
    import { ComponentMeta, ComponentStory } from '@storybook/react';
    const _default: ComponentMeta<(<T>({ columns, data, options }: import("component/types").TableProps<T>) => JSX.Element)>;
    export default _default;
    export const StringArgs: ComponentStory<(<T>({ columns, data, options }: import("component/types").TableProps<T>) => JSX.Element)>;
}
declare module "component/presets/index" {
    export type TablePresets = {};
    export const tablePresets: TablePresets;
}
