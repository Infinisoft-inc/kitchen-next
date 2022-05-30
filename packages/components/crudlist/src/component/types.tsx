/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from "react";
import { Store } from "store/types";

/**
 * CrudList Props
 */
export type CrudListProps = Partial<HTMLElement> & {
  /**
   * List title
   */
  title: React.ReactNode
  icon: React.ReactNode
  store: ReturnType<Store>
};
