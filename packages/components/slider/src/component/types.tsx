/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

export type Directions = 'left' | 'right'

export type SliderProps = {
  /**
   * Slider ending position
   */
  direction?: Directions
  /**
   * Styles
   */
  styleProps?: React.CSSProperties

  children: React.ReactNode
}
