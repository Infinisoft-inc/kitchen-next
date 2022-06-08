/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from "react";

/**
 * CrudList Props
 */
export type CrudListProps<T = any, I = any> = Partial<HTMLInputElement> & {
  /**
   * List title
   */
  listTitle: React.ReactNode
  icon: React.ReactNode
  onAdd: (newValue?: T) => void
  onChange: (newValue: T, id: I) => void
  onRemove: (id: I) => void
  itemList?: T[]
};

