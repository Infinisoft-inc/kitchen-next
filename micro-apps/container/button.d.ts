/// <reference types="react" />

declare module 'button/Button' {
  export type ButtonProps = {
    message?: string;
  };
  const Button: ({ message }: ButtonProps) => JSX.Element;
  export default Button;
}
declare module 'buttona/ButtonA' {

  export type Size = 'small' | 'large'

  export type ButtonAProps = {
    message?: string
    backgroundColor?: string
    size?: Size
  }

  const ButtonA: (props: ButtonAProps) => JSX.Element;
  export default ButtonA;
}
