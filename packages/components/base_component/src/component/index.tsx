/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context/index';
import { useMicroState } from '@/hooks/useStore';
import type { ExtendComponentProps } from './types';

const Component = (props: ExtendComponentProps) => {
  const { store } = useMicroContext()
  const state = useMicroState()

  return <div>
    <h1>Base Component Template</h1>

    <div>
      <h2>State</h2>
      <code key={store.getState()?.cat}>
        {JSON.stringify(state)}
      </code>
    </div>

    <div>
      <button onClick={() => {
        store.mutate((state) => ({ ...state, cat: 'XXXXX', user: 'XXXXX', bob: 99999, dog: 'XXXXXX' }))
        store.emit('scream', { level: 'DANGEROUS' });
      }}>Mutate State</button>
    </div>
  </div>;
}
export default Component
