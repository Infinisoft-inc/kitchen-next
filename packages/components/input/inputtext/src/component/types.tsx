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
   * this attributes collide with @types/react and must be replaced by before
   */
  prefix?: React.ReactNode
  before?: React.ReactNode
  /**
 * Suffix component
 * this attributes collide with @types/react and must be replaced by after
 */
  suffix?: React.ReactNode
  after?: React.ReactNode

  /**
   * Unique identifier
   */
  key: React.Key

} & React.InputHTMLAttributes<HTMLInputElement>
