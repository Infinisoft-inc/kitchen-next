import { Tokens } from '@/core/tokens';
export type Variants = "filled" | "outlined"

export type Presets = Record<Variants, Array<Tokens>>
export const presets: Presets = {
    filled: ['md_sys_color_primary', 'md_sys_color_on-primary', 'md_sys_color_shadow', 'md_sys_color_inverse-on-surface', 'md_sys_typescale_label-large'],
    outlined: ['md_sys_color_primary', 'md_sys_color_on-primary', 'md_sys_color_outline','md_sys_typescale_label-large']
}

