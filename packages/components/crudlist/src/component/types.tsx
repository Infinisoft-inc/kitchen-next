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
  title: React.ReactNode
  icon: React.ReactNode
  onAdd: () => void
  onChange: (id: I, item: T, newValue: T) => void
  onRemove: (id: I, item: T) => void
  itemList: T[]
};

