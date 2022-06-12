/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import React from 'react';

export type DialogProps = {
/**
 * Dialog content
 */
  children: React.ReactNode;
  /**
   * Events opening dialog
   */
  openEvents: string[]
  /**
   * Events closing dialog
   */
  closeEvents: string[]
} & React.HTMLProps<HTMLSpanElement>;
