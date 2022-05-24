/// <reference types="react" />

declare module "button/Button" {
  type Size = 'small' | 'large';
  type ButtonProps = {
      /**
       * message description
       */
      message?: string;
      backgroundColor?: string;
      size?: Size;
  };
  const Button: ({ message, backgroundColor, size, ...props }: ButtonProps) => JSX.Element;
  export default Button;
}
