/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
export type CrudListProps = Partial<HTMLElement> & {
  field: string
  title: string
  list: string[]
  icon: React.ReactNode
  readonly: boolean
  onRender?: <T = any, >(val: T) => string
  onChange?: false | {onChange: (val: string, index?: number) => void}
  onAdd?: () => void
  onDelete?: (index: number) => ()=> void
};
