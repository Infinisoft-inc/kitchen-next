/// <reference types="react" />
declare module "component/types" {
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
declare module "paginator/Paginator" {
    import { PaginatorProps } from "component/types";
    const Paginator: <T>({ rowPerPage, count, nextToken }: PaginatorProps<T>) => {
        _numberOfPage: number;
        handleBackPage: () => void;
        handleGotoPage: (_page: number) => void;
        handleNextPage: () => void;
        currentPage: number;
        paginate: <T_1>(_list?: Map<string, T_1> | undefined) => Map<string, T_1>;
        Paginator: <T_2>({ numberOfPage, handleGotoPage, currentPage }: any) => JSX.Element;
    };
    export default Paginator;
}
declare module "bootstrap" { }
declare module "component/paginator" {
    import { PaginatorProps } from "component/types";
    export const Paginator: <T>({ numberOfPage, handleGotoPage, currentPage }: any) => JSX.Element;
    export const usePaginator: <T>({ rowPerPage, count, nextToken }: PaginatorProps<T>) => {
        _numberOfPage: number;
        handleBackPage: () => void;
        handleGotoPage: (_page: number) => void;
        handleNextPage: () => void;
        currentPage: number;
        paginate: <T_1>(_list?: Map<string, T_1> | undefined) => Map<string, T_1>;
    };
    export default usePaginator;
}
declare module "component/presets/index" {
    export type PaginatorPresets = {};
    export const paginatorPresets: PaginatorPresets;
}
