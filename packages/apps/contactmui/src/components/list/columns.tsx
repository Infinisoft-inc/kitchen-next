/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { MicroStore } from "@/context/micro"
import { TableConfig } from "component/types"
import { defaultAvatar } from "./assets/svg"


export const columns = (store: MicroStore): TableConfig<API.Itemv2> => {
  const onClick = (id: string) => {
    window.dispatchEvent(new CustomEvent('item.clicked'))
    store.mutate(prev => ({ ...prev, editItemId: id }))
  }


  return {
    avatar: {
      responsive: 'xs',
      render: (item: API.Itemv2) => <img onClick={() => onClick(item.id)} src={item?.avatar ?? defaultAvatar} id={item.id} style={{ height: '50px', maxWidth: '50px' }} />
    },
    name: {
      render: (item: API.Itemv2) => <div key={item?.name} id={item.id} onClick={() => onClick(item.id)}>{item?.name}</div>
    },
    telephones: {
      render: (item: API.Itemv2) => item?.telephones?.map((phone, i) => <div onClick={() => onClick(item.id)} key={phone} id={item.id}>{phone}</div>)
    },

    email: {
      responsive: 'xs',
      render: (item: API.Itemv2) => <div onClick={() => onClick(item.id)} key={item?.email} id={item.id}>{item?.email}</div>
    },

    address: {
      responsive: 'xs',
      render: (item: API.Itemv2) => <div onClick={() => onClick(item.id)} key={item?.address} id={item.id}>{item?.address}</div>
    },
    Categories: {
      responsive: 'xs',
      render: (item: API.Itemv2) => <div onClick={() => onClick(item.id)} key={item?.id} id={item.id}>{item?.Categories}</div>
    },
    Subcategory: {
      responsive: 'xs',
      render: (item: API.Itemv2) => <div onClick={() => onClick(item.id)} key={item?.id} id={item.id}>{item?.Subcategory}</div>
    }
  }
}