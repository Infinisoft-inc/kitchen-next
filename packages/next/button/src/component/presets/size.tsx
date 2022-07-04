/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

export type Size = 'small' | 'large'


export type ButtonSizePresets = { [P in Size]: {
  height: string
  width: string
} }

export const buttonSizePresets: ButtonSizePresets = {
  large: {
    width: '200px',
    height: '125px'
  },
  small: {
    width: '125px',
    height: '65px'
  }
}
