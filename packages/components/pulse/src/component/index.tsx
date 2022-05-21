/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Module Federated Micro Component
 */
import { AnimatePresence, motion } from "framer-motion";
import React, { Suspense } from 'react';
import { directionPreset } from './presets/direction';
import { PulseProps } from './types';

const Pulse = ({ direction='horizontal', children }: PulseProps) => {

  return <Suspense><AnimatePresence>
    <motion.div
      variants={directionPreset[direction]}
      initial="initial"
      animate="animate"
      exit="exit"
      style={{ textAlign: 'center' }}
      transition={{ ease: 'easeInOut', duration: 0.550, repeat: Infinity, repeatType: 'reverse' }}
    >
      {children}
    </motion.div>
  </AnimatePresence></Suspense>
}

export default Pulse;
