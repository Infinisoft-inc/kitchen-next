/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { MicroStore } from "@/context/micro"
import { defaultAvatar } from "../avatar-upload/assets"
import { TableConfig } from "../table/types"


export const columns = (store: MicroStore): TableConfig<API.Item> => {
  const onClick = (SK: string) => {
    window.dispatchEvent(new CustomEvent('item.clicked'))
    // @ts-ignore
    store.mutate(prev => ({ ...prev, editItemId: SK }))
  }


  return {
    avatar: {
      responsive: 'xs',
      render: (item: API.Item) => <img onClick={() => onClick(item.SK!)} src={item?.avatar ?? defaultAvatar} id={item.SK} style={{ height: '50px', maxWidth: '50px' }} />
    },
    // Subcategory: {},
    name: {
      render: (item: API.Item) => <div key={item?.name} id={item.SK} onClick={() => onClick(item.SK!)}>{item?.name}</div>
    },
    telephones: {
      render: (item: API.Item) => item?.telephones?.map((phone, i) => <div onClick={() => onClick(item.SK!)} key={phone} id={item.SK}>{phone}</div>)
    },

    email: {
      responsive: 'xs',
      render: (item: API.Item) => <div onClick={() => onClick(item.SK!)} key={item?.email} id={item.SK}>{item?.email}</div>
    },

    address: {
      responsive: 'xs',
      render: (item: API.Item) => <div onClick={() => onClick(item.SK!)} key={item?.address} id={item.SK}>{item?.address}</div>
    }
  }
}
