/// <reference types="react" />

declare module 'buttondog/ButtonDog' {
  export type ButtonDogProps = {
    message?: string;
  };
  const ButtonDog: ({ message }: ButtonDogProps) => JSX.Element;
  export default ButtonDog;
}
