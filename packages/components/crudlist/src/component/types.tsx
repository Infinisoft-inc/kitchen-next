/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { InputTextProps } from "component/types";
import React from "react";

/**
 * CrudList Props
 */
type Crud<T = any, I = any> = {
  itemList?: T[]
  onAdd?: (newValue?: T) => void
  onChangeItem?: (newValue: T, id: I) => void
  onRemove?: (id: I) => void
}
export type CrudListProps<T = any, I = any> = Partial<HTMLInputElement> & Crud<T, I> & Partial<InputTextProps> & {
  /**
   * List title
   */
  listTitle?: React.ReactNode
  /**
   * Title Icon
   */
  icon?: React.ReactNode
  /**
   * Custom render
   */
  itemRender?: (item: T, index: number, array:T[]) => React.ReactNode
};

