import { Colors } from "../types"

export type PresetValues =  {colors: string}

export type ColorPreset = {
    color: PresetValues,
  }
export type ColorPresets = Record<Colors, ColorPreset>  

export const colorsPreset: ColorPresets = {
   red: {color: {colors: '#ff1818'}},
   green: {color: {colors: '#33ff18'}}

}