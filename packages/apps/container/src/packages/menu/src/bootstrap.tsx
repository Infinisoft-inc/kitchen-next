/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { createRoot } from 'react-dom/client';
import Component from './component';

/**
 * Component is fetched at runtime with Module Federation.
 * Therefore, props are unknown at compile time.
 *
 */

createRoot(document.getElementById('root')!).render(<Component />);
