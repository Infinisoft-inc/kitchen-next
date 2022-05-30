declare module "store/types" {
    export type Snapshot<T> = {
        list: T[];
        item: T | null;
    };
    export type ICrud<T = unknown> = {
        add: (item: T) => void;
        change: (val: T, predicat: () => T) => void;
        remove: (predicat: () => T) => void;
        edit: (predicat: () => T) => void;
        commit: (item: number) => void;
        clear: () => void;
    };
    export type IStore<T = unknown> = {
        subscribe: (onStoreChange: () => void) => () => void;
        getSnapshot: () => Snapshot<T>;
        getServerSnapshot?: () => Snapshot<T>;
    } & ICrud<T>;
    export type Store = <T>(init?: T[] | (() => Promise<T[]>) | undefined) => IStore<T>;
}
declare module "store/createstore" {
    import { Store } from "store/types";
    const createstore: Store;
    export default createstore;
}
declare module "bootstrap" {
    import createstore from "store/createstore";
    export * as types from "store/types";
    export default createstore;
}
