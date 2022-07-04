/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
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

import { Tokens } from '@/core/style/tokens';
export type Variants = "default" | "filled" | "outlined"
export type Presets = Record<Variants, Tokens[]>
export * from './size';

export const presets: Presets = {
    default: ['md_sys_color_primary', 'md_sys_color_on-primary', 'md_sys_color_shadow', 'md_sys_color_inverse-on-surface', 'md_sys_typescale_label-large'],
    filled: ['md_sys_color_primary', 'md_sys_color_on-primary', 'md_sys_color_shadow', 'md_sys_color_inverse-on-surface', 'md_sys_typescale_label-large'],
    outlined: ['md_sys_color_primary', 'md_sys_color_on-primary', 'md_sys_color_outline','md_sys_typescale_label-large']
}

