/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { color } from '../../common/common';
export type VariantButton = "filled" | "outlined"
export type ButtonAPresets = Record<VariantButton, keyof typeof color>

export const buttonaPresets: ButtonAPresets = {
    filled: 'md_sys_color_primary',
    outlined: 'md_sys_color_secondary'
}
