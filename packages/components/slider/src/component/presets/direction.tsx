/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { Directions } from '../types';

export type PresetValues = { opacity: number; x: number };

export type DirectionPreset = {
  initial: PresetValues;
  animate: PresetValues;
  exit: PresetValues;
};

export type DirectionPresets = Record<Directions, DirectionPreset>;

export const directionPreset: DirectionPresets = {
  left: {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  },
  right: {
    initial: { opacity: 0, x: -100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
  },
};
