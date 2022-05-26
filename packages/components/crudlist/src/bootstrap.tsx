import React from 'react';
import { createRoot } from 'react-dom/client';
import Component from './component';

//@ts-ignores
createRoot(document.getElementById('root')!).render(<Component />);
