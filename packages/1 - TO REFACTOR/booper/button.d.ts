/// <reference types="react" />

declare module 'booper/Booper' {
  export type BooperProps = {
    message?: string;
  };
  const Booper: ({ message }: BooperProps) => JSX.Element;
  export default Booper;
}
