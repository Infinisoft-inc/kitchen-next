/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * CrudList Federated Micro Component
 */
import { Button, Typography } from 'antd';
import React, { ForwardedRef, forwardRef, Suspense } from 'react';
import { AddIcon, DeleteIcon } from '../assets/svg';
import css from './index.module.css';
import { CrudListProps } from './types';


const ContactDetails = React.lazy(() => import(/* webpackChunkName: 'ContactDetails' */ 'contactdetails/ContactDetails'))

const CrudList = ({
  field,
  title,
  icon,
  list=[],
  readonly = false,
  onRender = (a: any) => a,
  onChange = () => { },
  onAdd = () => { },
  onDelete = () => () => { },
  ...props
}: CrudListProps, ref: ForwardedRef<unknown>) => {


  return <Suspense>
    <div className={css.root}>
      <ContactDetails
        {...props}
        icon={icon}
        title={<>{title} <Button hidden={readonly} type='text' onClick={onAdd}><AddIcon /></Button></>}
        content={
          list?.map(
            (item: string, i: number) =>
              <span key={`item${i}`} className={css.item}>
                <Typography.Text editable={readonly ? false : {onChange}} key={item + i}>
                  {onRender(item)}
                </Typography.Text>
                <Button type='text' hidden={readonly} onClick={onDelete(i)}><DeleteIcon /></Button>
              </span>
          )}
        onChange={onChange}
      />
    </div>

  </Suspense>
}

export default forwardRef<unknown, CrudListProps>(CrudList);
