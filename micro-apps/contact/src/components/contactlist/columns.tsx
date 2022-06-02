/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { ContactStore } from "@/context/micro";
import type { ProColumns } from "@ant-design/pro-table";
import { bubble } from "@infini-soft/utils/lib/Sorters";
import { Avatar } from "antd";
import React from 'react';
import { AvatarIcon } from "../avatar-upload/assets";
import css from './index.css';

export const columns = (store: ContactStore): ProColumns<API.Item>[] => [
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: bubble('name'),
    render: (dom, entity) => {
      return (<div className={css.mobileColumnContainer}>
        <Avatar shape="square" src={entity.avatar} size={48}><AvatarIcon /></Avatar>
        <a
          onClick={() => {
            store.publish("item.clicked", entity)
            store.mutate((_state => {
              return { ..._state, itemSelectedId: entity.SK }
            }))
          }}
          key={entity.SK}
        >
          {dom}
        </a>

        {entity.email}
      </div>);
    },
    responsive: ['xs']
  },
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    render: (_, entity) => <Avatar shape="square" src={entity.avatar} size={48} style={{ backgroundColor: 'transparent' }}><AvatarIcon /></Avatar>,
    responsive: ['sm']

  },
  {
    title: 'Name',
    dataIndex: 'name',
    sorter: bubble('name'),
    render: (dom, entity) => {
      return (
        <a
          onClick={() => {
            store.publish("item.clicked", entity)
            store.mutate((_state => {
              return { ..._state, itemSelectedId: entity.SK }
            }))
          }}
          key={entity.SK}
        >
          {dom}
        </a>
      );
    },
    responsive: ['sm']
  },
  {
    title: 'Category',
    dataIndex: 'SK',
    sorter: bubble('SK'),
    filters: true,
    render: (_, record) => record.SK?.split('__')?.[0] ?? 'Unknown',
    hideInTable: true
  },
  {
    title: 'Subcategory',
    dataIndex: 'Subcategory',
    sorter: bubble('Subcategory'),
    filters: true,
    render: (_, record) => record.Subcategory?.split('__')?.[0] ?? 'Unknown',
    responsive: ['lg'],
  },
  {
    title: 'Address',
    dataIndex: 'address',
    sorter: bubble('address'),
    render: (_, record) => record.address,
    responsive: ['md'],
  },
  {
    title: 'Telephones',
    dataIndex: 'telephones',
    sorter: bubble('telephones'),
    valueType: 'select',
    render: (_, record) => {
      if (Array.isArray(record.telephones)) {
        return <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>{record.telephones.map((t, i) => <div key={i}>{t}</div>)}</div>
      }
    },
    responsive: ['sm'],
  },
  {
    title: 'Email',
    dataIndex: 'email',
    sorter: bubble('email'),
    valueType: 'text',
    render: (_, record) => record.email,
    responsive: ['md'],
  },
  {
    title: 'Website',
    dataIndex: 'website',
    sorter: bubble('website'),
    valueType: 'text',
    hideInTable: true,
    responsive: ['md'],
  },
  {
    title: 'Relation',
    dataIndex: 'relatedWith',
    sorter: bubble('relatedWith'),
    valueType: 'text',
    hideInTable: true,
    responsive: ['md'],
  }
]
