/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

// import { Variants } from "@/component/presets"
import { Variants } from "@/app/presets"
import React from "react"
import { tokens } from "./tokens"

export type ContextProps = {
  children: React.ReactNode
  variant?: any//Variants
  context?: Context
  mode?: ThemeMode
}

type getToken = <K extends keyof typeof tokens>(_tokens: K[]) => string
export type ThemeMode = "dark" | "light"
export type Context = {
    dynamicStyle: string
    getToken: getToken
    mode: ThemeMode
    variant: Variants
}

