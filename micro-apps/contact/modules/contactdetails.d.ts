/// <reference types="react" />
declare module "component/types" {
    export type ContactDetailProps = {
        /**
         * Title
         */
        title: React.ReactNode;
        /**
         * Content
         */
        content: React.ReactNode;
        /**
         * Icon
         */
        icon: React.ReactNode;
        /**
         * Style classname
         */
        className?: string;
        /**
         * Editable field name
         */
        editableFieldName?: string;
        /**
         * onChange event callback
         */
        onChange?: false | {
            onChange: (val: string) => void;
        };
    };
}
declare module "contactdetails/ContactDetails" {
    import React from 'react';
    import type { ContactDetailProps } from "component/types";
    const _default: React.ForwardRefExoticComponent<ContactDetailProps & React.RefAttributes<unknown>>;
    export default _default;
}
declare module "bootstrap" { }
