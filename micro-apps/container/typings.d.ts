///<reference types="react" />

declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}

declare module 'contact/Index' {
  const Index: React.ComponentType;

  export default Index;
}

// declare module 'button/Button' {
//   const Button: React.ComponentType<{message?:string}>;

//   export default Button;
// }
