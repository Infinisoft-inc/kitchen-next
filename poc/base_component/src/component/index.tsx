/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context/index';
import type { ExtendComponentProps } from './types';

const Component = (props: ExtendComponentProps) => {
  const {store} = useMicroContext()

  return <div>Fistonne 2</div>;
}
export default Component