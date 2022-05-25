import { Colors } from "../types"

export type PresetValues =  {colorss: string}

export type ColorPreset = {
    color: PresetValues,
  }
export type ColorPresets = Record<Colors, ColorPreset>  

export const colorPreset: ColorPresets = {
   red: {color: {colorss: '#ff1818'}},
   green: {color: {colorss: '#33ff18'}}

}