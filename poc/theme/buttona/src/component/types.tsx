/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from "react"
import { Context, ThemeMode } from "../common/common"
import { VariantButton } from "./presets"

export type ButtonContextProps = {
  children: React.ReactNode
  variant?: VariantButton
  context?: Context
  mode?: ThemeMode
}

export type ButtonProps = {
  variant: VariantButton
  children: React.ReactNode
}
