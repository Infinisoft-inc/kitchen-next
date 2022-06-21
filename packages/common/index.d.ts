declare module "api/index" {
    export type ItemSuccess<T> = {
        data?: T;
        success?: boolean;
    };
    export type Success<T> = {
        data?: T[];
        success?: boolean;
    };
    export type Error = {
        /** Error code */
        errorCode?: string;
        /** Error message */
        errorMessage?: string;
        /** false */
        success?: boolean;
    };
}
declare module "models/contact" {
    export type Contact = {
        name: string;
        avatar?: string;
        email?: string;
        address?: string;
        website?: string;
        telephones?: string[];
    };
}
declare module "models/entity" {
    export type Meta = {
        /** Categories  */
        Categories?: string;
        /** SubCategory - Global Secondary Index */
        Subcategory?: string;
        /** Relation in the graph */
        relatedWith?: string[];
    };
    export type Unique = {
        /** uuid*/
        id: string;
        /** Optional ID. Can be used by front-end to identify new items. */
        tempID?: string;
        /** Creation date in ISO 8601 format */
        createdAt: string;
        /** Last updated date in ISO 8601 format */
        updatedAt: string;
        /** MANAGE LATER  */
        SK?: string;
        /** Item is enabled or disabled */
        enabled?: boolean;
    };
    export type Timestamp = {
        /** Item creator userid */
        USERID?: string;
        /** Item creator name */
        NAME?: string;
        /** Item creator email */
        EMAIL?: string;
        /** Item creator picture url */
        PICTURE?: string;
    };
    export type Entity = Unique & Meta & Timestamp;
}
declare module "models/index" {
    export * from "models/contact";
    export * from "models/entity";
}
declare module "context/security" {
    import { Contact, Meta, Unique } from "models/index";
    export type SecurityContext<T = any> = Unique & Contact & T & Meta;
}
declare module "context/index" {
    export * from "context/security";
}
declare module "index" {
    export * from "api/index";
    export * from "context/index";
    export * from "models/index";
}
