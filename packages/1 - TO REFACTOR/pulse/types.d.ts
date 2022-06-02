/// <reference types="react" />

import type { PulseProps } from './src/component/types';

declare module 'pulse/Pulse' {

  const Pulse: (props: PulseProps) => JSX.Element;
  export default Pulse;
}
