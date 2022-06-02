/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Fader Federated Micro Component
 */
import { AnimatePresence, motion } from "framer-motion";
import React, { ForwardedRef, forwardRef, Suspense } from 'react';
import { FaderProps } from './types';


const Fader =  ({children}: FaderProps, ref: ForwardedRef<unknown>) => {
const [state, setState] = React.useState(1);

  const animations = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  };


  return <Suspense>
    <AnimatePresence>
       <motion.div
         variants={animations}
         initial="initial"
         animate="animate"
         exit="exit"
         style={{textAlign: 'center'}}
       >
         {children} 
       </motion.div>
     </AnimatePresence>
     <button
        style={{ marginTop: '5rem', color: 'black' }}
        onClick={() => setState((prev) => prev + 1)}
      >
        Retry
      </button>
  </Suspense>
}

export default forwardRef<unknown, FaderProps>(Fader);
