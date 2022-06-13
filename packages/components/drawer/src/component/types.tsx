/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import React from 'react';

export type DrawerProps = {
  children: React.ReactNode;
  visible?: boolean;
} & Partial<React.HTMLProps<HTMLSpanElement>>
