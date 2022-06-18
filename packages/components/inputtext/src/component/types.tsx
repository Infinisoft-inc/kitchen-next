/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from "react"

export type InputTextProps = {
  /**
   * Multiline
   */
  multiline?: boolean
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
  /**
   * label
   */
  label?: string,
  /**
   * input Placeholder
   */
  placeholder?: string,
  /**
 * Props passed down to input or textarea
 */
  inputProps?: Partial<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>>,
} & Partial<React.InputHTMLAttributes<HTMLFieldSetElement>>

