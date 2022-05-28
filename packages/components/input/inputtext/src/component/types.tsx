/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from "react"

export type InputTextProps = {
  /**
   * variant
   */
  variant?: "primary" | 'secondary' | string
  /**
   * Transparent background, no border
   */
  ghost?: boolean
  /**
   * This element value is copyable in the clipboard
   */
  copyable?: boolean
  /**
   * This element is removeable
   * Triggers onRemove
   */
  removable?: boolean
  onRemove?: <T, >(...arg: T[]) => void
  /**
   * Prefix component
   */
  prefix?: React.ReactNode
  /**
 * Suffix component
 */
  suffix?: React.ReactNode

} & React.InputHTMLAttributes<HTMLInputElement>
