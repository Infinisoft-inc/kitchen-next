/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { tokens } from '@/core/tokens';
export type Variants = "filled" | "outlined"

export type Presets = Record<Variants, (keyof typeof tokens)[]>
export const presets: Presets = {
    filled: ['md_sys_color_primary', 'md_sys_color_on-primary', 'md_sys_color_shadow', 'md_sys_color_inverse-on-surface', 'md_sys_typescale_label-large'],
    outlined: ['md_sys_color_secondary']
}


/**
 * Presets are arrays of design token requested at runtime.
 * This process is triggered when Component mounts. Its context is injected by
 * container holding token resolver function.
 * 
 * Component request tokens values. 
 * Assumptions:
 * - Single source of truth in federation
 * - Highest container in graph is style master (Scalability)
 * - Memory optimization (Only component required tokens are stored in memory instead of duplicating tokens in each shadow dom)
 * 
 * Semantic
 * 
 * key      {string}    CSS Class
 * value    {Token}     Design Token Object
 * 
 * Token
 * key      {string}    CSS Variable 
 * value    {string}    Variable value
 */

