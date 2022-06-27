/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from "react"
import { Context, ThemeMode } from "../common/common"
import { Variants } from "./presets"

export type ContextProps = {
  children: React.ReactNode
  variant?: Variants
  context?: Context
  mode?: ThemeMode
}

export type ComponentProps = {
  variant: Variants
  children: React.ReactNode
}
