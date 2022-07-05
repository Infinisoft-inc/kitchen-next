/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from '@/context/index';
import { useMicroState } from '@/hooks/useMicroState';
import { Suspense } from 'react';
import { DeleteIcon } from './assets';
import './index.module.css';
import type { ExtendComponentProps } from './types';

const Component = ({
  onRemove,
  children,
  onChange,
  ...props
}: ExtendComponentProps) => {
  const { store } = useMicroContext();
  const state = useMicroState();

  return (
    <div>
      <Suspense>
        <div data-style={'data:chip:control'} {...props}>
          {children}{' '}
          {onRemove && (
            <button onClick={onRemove}>
              <DeleteIcon />
            </button>
          )}
        </div>
      </Suspense>
    </div>
  );
};
export default Component;
