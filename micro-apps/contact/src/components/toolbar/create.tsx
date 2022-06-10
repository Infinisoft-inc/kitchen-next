/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import '@/style';
import css from './index.css';

const Create = () => {
  return <div data-style='create:container:root' onDragStart={console.log} onDragEnd={console.log} draggable >
    <button className={css.baseButton} key="primary" onClick={() => { window.dispatchEvent(new CustomEvent('create.click')) }}>
      Create
    </button>
  </div>
}

export default Create
