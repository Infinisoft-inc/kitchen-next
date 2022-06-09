/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from "react"

export type ChipProps = Partial<React.HTMLAttributes<HTMLDivElement>> & {
  children?: React.ReactNode
  onRemove?: () => void
  onChange?:(arg: string)=>void
}
