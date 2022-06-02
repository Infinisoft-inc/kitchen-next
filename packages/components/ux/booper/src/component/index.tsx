/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Booper Federated Micro Component
 */
import { AnimatePresence, motion } from "framer-motion";
import React, { ForwardedRef, forwardRef, Suspense } from 'react';
import { BooperProps } from './types';

const Booper =  (props: BooperProps, ref: ForwardedRef<unknown>) => {
  const animations = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 }
  };

  return <Suspense>
  <AnimatePresence>
      <motion.div
        variants={animations}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ textAlign: 'center' }}
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  </Suspense>
}

export default forwardRef<unknown, BooperProps>(Booper);