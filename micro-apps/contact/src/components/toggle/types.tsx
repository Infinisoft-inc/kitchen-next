/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from "react"

export type ToggleProps = Partial<React.HTMLAttributes<HTMLButtonElement>> & {
  /**
   * Callback onclick and pass it's value as argument
   */
  clickHandler: (term?: string) => void
  /**
   * Toggle label list
   */
  toggles: string[]
}
