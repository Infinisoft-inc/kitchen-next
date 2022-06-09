/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from "react";



const Create = () => {
  return <div data-style='create:container:root'>
    <button key="primary" onClick={() => { window.dispatchEvent(new CustomEvent('create.click')) }}>
      Create
    </button>
  </div>
}

export default Create
