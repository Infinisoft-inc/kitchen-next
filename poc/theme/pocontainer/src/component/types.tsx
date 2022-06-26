/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

export type PocContainerProps = {
  title?: string
  content?: string
}

export type Context = {
  dynamicStyle: string
}

export const context: Context = {
  dynamicStyle: `:host { --md-sys-primary-color: orange; } button { background-color: var(--md-sys-primary-color); }`
}
