/// <reference types="react" />

declare module 'slider/Slider' {
  export type SliderProps = {
    message?: string;
  };
  const Slider: ({ message }: SliderProps) => JSX.Element;
  export default Slider;
}
