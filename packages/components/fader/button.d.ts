/// <reference types="react" />

declare module 'fader/Fader' {
  export type FaderProps = {
    message?: string;
  };
  const Fader: ({ message }: FaderProps) => JSX.Element;
  export default Fader;
}
