/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { createRoot } from 'react-dom/client';
import Component from './component';
import './style.css';


const host = document.getElementById('root') //|| document.createElement('div');
const shadow = host!.attachShadow({ mode: 'closed' });
const renderIn = document.createElement('div');
shadow.appendChild(renderIn);
createRoot(renderIn).render(<Component />);
