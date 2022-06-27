/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { Variants } from "@/component/presets"
import React from "react"
import { Context, ThemeMode } from "../common/common"

export type ContextProps = {
  children: React.ReactNode
  variant?: Variants
  context?: Context
  mode?: ThemeMode
}
