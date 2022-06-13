/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from "react"

export type TopBarProps = {
  /**
   * Brand image url
   */
  brandImageUrl?: string
  /**
   * BrandImage Component Override
   */
  brandComponent?: React.ReactNode

  /**
   * Menu Component Override
   */
  menuComponent?: React.ReactNode
  /**
   * Override DSP Tokens
   * Overidding tokens will change it's value for the entire document
   */
  overrideTokens?: boolean
} & TokenBarDSP

/**
 * Theme DSP Tokens override
 */
export type TokenBarDSP = {
  "background-color"?: string
  color?: string
}
