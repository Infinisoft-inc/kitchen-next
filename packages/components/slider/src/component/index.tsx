/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Module Federated Micro Component
 */
 import { AnimatePresence, motion } from "framer-motion";
import React, { Suspense } from 'react';
import { directionPreset } from "./presets/direction";
import { SliderProps } from "./types";
 
 
 const Slider = ({ children, direction = 'left', styleProps = {}, ...props}: SliderProps) => {
 
 return <Suspense>
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
 }
 
 export default Slider;
 