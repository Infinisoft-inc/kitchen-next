/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

export type Colors = 'red' | 'green'

export type SpinnerProps = {
  spinnerStyle: React.CSSProperties
  loaderStyle: React.CSSProperties
  loaderOuterStyle: React.CSSProperties
  loaderInnerStyle: React.CSSProperties
  colors: Colors
}
