declare module "test/types" {
    export type test = {};
}
declare module "test/mylib" {
    import type { test } from "test/types";
    const mylib: test;
    export default mylib;
}
declare module "bootstrap" {
    import mylib from "test/mylib";
    export * as types from "test/types";
    export default mylib;
}
