/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import React from 'react';

export type ModalProps = {
  children: React.ReactNode;
  visible?: boolean;
} & React.HTMLProps<HTMLSpanElement>;
