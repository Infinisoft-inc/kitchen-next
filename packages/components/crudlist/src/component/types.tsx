/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from "react";

/**
 * CrudList Props
 */
export type CrudListProps<T = any> = Partial<HTMLElement> & {
  /**
   * List title
   */
  title: React.ReactNode
  icon: React.ReactNode
  onAdd: ()=>void
  onChange: ()=>void
  onRemove: ()=>void
  list: T[]

};
