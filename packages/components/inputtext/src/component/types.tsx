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
   * Before component
   * this attributes collide with @types/react and must be replaced by before
   */
  before?: React.ReactNode
  /**
 * After component
 * this attributes collide with @types/react and must be replaced by after
 */
  after?: React.ReactNode
  /**
   * Invalid component
   */
  invalidMessage?: string

} & React.InputHTMLAttributes<HTMLInputElement>
