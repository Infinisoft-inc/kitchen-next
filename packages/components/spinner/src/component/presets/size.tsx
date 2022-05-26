/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { Size } from '../types'


export type SizePresets = { [P in Size]: {
  height: string
  width: string
} }

export const sizePresets: SizePresets = {
  large: {
    width: '80px',
    height: '80px'
  },
  medium: {
    width: '60px',
    height: '60px'
  },
  small: {
    width: '40px',
    height: '40px'
  }
}
