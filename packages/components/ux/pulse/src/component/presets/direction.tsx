/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { MotionDirection } from "../types";

export type Coordinates = {
  x?: number
  y?: number
}

export type DirectionPresetProps = {
  initial: Coordinates,
  animate: Coordinates,
  exit: Coordinates,
}

export type DirectionPreset = Record<MotionDirection, DirectionPresetProps>

export const directionPreset: DirectionPreset = {
  vertical: {
    initial: { y: -10 },
    animate: { y: 0 },
    exit: { y: -10 }
  },
  horizontal: {
    initial: { x: -10 },
    animate: { x: 0 },
    exit: { x: -10 }
  }
}


