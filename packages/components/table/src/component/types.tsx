/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

/**
 * Table Options
 */
export type TableOptions = {
  pagination?: boolean
  rowPerPage?: number
}
/**
 * Table configuration
 */
export type TableConfig<T> = Partial<Record<Partial<keyof T>, TableRowConfig<T>>>

/**
 * Row config
 */
export type TableRowConfig<T> = {
  /**
   * Show column from `value` and upper
   */
  responsive?: "xs" | "sm" | "md" | "lg" | "lg",
  /**
   * Custom cell render
   */
  render?: (row: T) => React.ReactNode
}

/**
 * Table props
 */
export type TableProps<T> = {
  /**
   * Columns config
   */
  columns: Record<string, TableRowConfig<T>>
  /**
   * Data map
   */
  data?: Map<string, T>
  /**
   * Table options
   */
  options?: TableOptions
}


export type PaginatorProps<T> = {
  /**
   * Row per page
   */
  rowPerPage: number
  /**
   * Next pagination token
   */
  nextToken?: string | number
  /**
   * Total number records
   */
  count?: number
}
