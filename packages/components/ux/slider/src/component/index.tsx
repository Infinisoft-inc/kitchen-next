/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Slider Federated Micro Component
 */
import { AnimatePresence, motion } from 'framer-motion';
import React, { ForwardedRef, forwardRef, Suspense } from 'react';
import { directionPreset } from './presets/direction';
import { SliderProps } from './types';

const Slider = (
  { children, direction = 'left', styleProps = {}, ...props }: SliderProps,
  ref: ForwardedRef<unknown>,
) => {
  return (
    <Suspense>
      <AnimatePresence>
        <motion.div
          {...props}
          style={{ textAlign: 'center', ...styleProps }}
          variants={directionPreset[direction]}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </Suspense>
  );
};

export default forwardRef<unknown, SliderProps>(Slider);
