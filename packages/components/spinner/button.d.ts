/// <reference types="react" />

declare module 'spinner/Spinner' {
  export type SpinnerProps = {
    message?: string;
  };
  const Spinner: ({ message }: SpinnerProps) => JSX.Element;
  export default Spinner;
}
