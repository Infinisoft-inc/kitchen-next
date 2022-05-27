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
    import React, { ForwardedRef } from 'react';
    import type { ContactDetailProps } from "component/types";
    export const ContactDetails: ({ icon, title, onChange, editableFieldName, content, ...props }: ContactDetailProps, ref: ForwardedRef<unknown>) => JSX.Element;
    const _default: React.ForwardRefExoticComponent<ContactDetailProps & React.RefAttributes<unknown>>;
    export default _default;
}
declare module "bootstrap" { }
