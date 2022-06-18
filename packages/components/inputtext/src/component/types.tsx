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
   * inverse theme colors
   */
  inverse?: boolean
  /**
   * containerProps
   */
  containerProps?: Partial<React.FieldsetHTMLAttributes<HTMLFieldSetElement>>
  /**
   * Add css class to container
   */
  containerClass?: string
  /**
   * inputProps
   */
  inputProps?: Partial<React.InputHTMLAttributes<HTMLInputElement>>
  /**
   * Add css class to container
   */
  inputClass?: string
} & Partial<React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>>

