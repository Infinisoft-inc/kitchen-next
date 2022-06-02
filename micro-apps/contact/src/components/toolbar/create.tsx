/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { Button } from "antd";
import React from "react";
import { useMicroContext } from "../../context/micro";



const Create = () => {
  const { store } = useMicroContext()

  return <div data-style='create:container:root'>
    <Button type="primary" key="primary" onClick={() => { store.publish('create.clicked')}}>
      Create
    </Button>
  </div>
}

export default Create
