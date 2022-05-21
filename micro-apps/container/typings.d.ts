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

declare module 'pulse/Pulse' {
  export type MotionDirection = 'vertical' | 'horizontal'

  export type PulseProps = {
    direction: MotionDirection
    children: React.ReactNode
  };


  const Pulse: (props: PulseProps) => JSX.Element;
  export default Pulse;
}
