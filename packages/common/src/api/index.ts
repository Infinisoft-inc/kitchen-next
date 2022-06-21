/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

export type ItemSuccess<T> = {
  data?: T;
  success?: boolean;
};

export type Success<T> = {
  data?: T[];
  success?: boolean;
};

export type Error = {
  /** Error code */
  errorCode?: string;
  /** Error message */
  errorMessage?: string;
  /** false */
  success?: boolean;
};
