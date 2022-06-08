/// <reference types="react" />
declare module "component/assets/svg" {
  export const PhoneIcon: () => JSX.Element;
  export const DeleteIcon: () => JSX.Element;
  export const AddIcon: () => JSX.Element;
}
declare module "component/types" {
  import React from "react";
  /**
   * CrudList Props
   */
  export type CrudListProps<T = any, I = any> = Partial<HTMLInputElement> & {
      /**
       * List title
       */
      listTitle: React.ReactNode;
      icon: React.ReactNode;
      onAdd: (newValue?: T) => void;
      onChange: (newValue: T, id: I) => void;
      onRemove: (id: I) => void;
      itemList?: T[];
  };
}
declare module "crudlist/CrudList" {
  import { CrudListProps } from "component/types";
  export const CrudList: ({ title, icon, itemList, onAdd, onChange, onRemove, name, ...props }: CrudListProps) => JSX.Element;
  export default CrudList;
}
declare module "bootstrap" { }
declare module "component/index.stories" {
  import { ComponentMeta, ComponentStory } from '@storybook/react';
  const _default: ComponentMeta<({ title, icon, itemList, onAdd, onChange, onRemove, name, ...props }: import("component/types").CrudListProps<any, any>) => JSX.Element>;
  export default _default;
  export const Example: ComponentStory<({ title, icon, itemList, onAdd, onChange, onRemove, name, ...props }: import("component/types").CrudListProps<any, any>) => JSX.Element>;
}
declare module "component/presets/index" {
  export type CrudListPresets = {};
  export const crudlistPresets: CrudListPresets;
}
