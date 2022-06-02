declare module "libuniqueid/mylib" {
    const mylib: () => void;
    export default mylib;
}
declare module "libuniqueid/types" {
    export type libuniqueidType = {};
}
declare module "bootstrap" {
    import mylib from "libuniqueid/mylib";
    export * as types from "libuniqueid/types";
    export default mylib;
}
