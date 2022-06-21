/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { MicroStore } from "@/context/micro"
import { TableConfig } from "component/types"
import { defaultAvatar } from "./assets/svg"


export const columns = (store: MicroStore): TableConfig< Item> => {
  const onClick = (SK: string) => {
    window.dispatchEvent(new CustomEvent('item.clicked'))
    store.mutate(prev => ({ ...prev, editItemId: SK }))
  }


  return {
    avatar: {
      responsive: 'xs',
      render: (item:  Item) => <img onClick={() => onClick(item.SK!)} src={item?.avatar ?? defaultAvatar} id={item.SK} style={{ height: '50px', maxWidth: '50px' }} />
    },
    // Subcategory: {},
    name: {
      render: (item:  Item) => <div key={item?.name} id={item.SK} onClick={() => onClick(item.SK!)}>{item?.name}</div>
    },
    telephones: {
      render: (item:  Item) => item?.telephones?.map((phone, i) => <div onClick={() => onClick(item.SK!)} key={phone} id={item.SK}>{phone}</div>)
    },

    email: {
      responsive: 'xs',
      render: (item:  Item) => <div onClick={() => onClick(item.SK!)} key={item?.email} id={item.SK}>{item?.email}</div>
    },

    address: {
      responsive: 'xs',
      render: (item:  Item) => <div onClick={() => onClick(item.SK!)} key={item?.address} id={item.SK}>{item?.address}</div>
    }
  }
}
