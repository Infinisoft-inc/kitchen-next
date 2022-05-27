/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * CrudList Federated Micro Component
 */
 import { Typography } from 'antd';
import React, { ForwardedRef, forwardRef, Suspense } from 'react';
import { AddIcon, DeleteIcon } from './assets/svg';
import css from './index.module.css';
import { CrudListProps } from './types';


 const ContactDetails = React.lazy(() => import('contactdetails/ContactDetails'))

 export const CrudList = ({
   field,
   title,
   icon,
   list=[],
   readonly = false,
   onRender = (a: any) => a,
   onChange = false,
   onAdd = () => { },
   onDelete = () => () => { },
   ...props
 }: CrudListProps, ref: ForwardedRef<unknown>) => {


   return <Suspense>
     <div className={css.root}>
       <ContactDetails
         {...props}
         icon={icon}
         title={<>{title} <button hidden={readonly} onClick={onAdd}><AddIcon /></button></>}
         content={
           list?.map(
             (item: string, i: number) =>
               <span key={`item${i}`} className={css.item}>
                 <Typography.Text editable={onChange} key={item + i}>
                   {onRender(item)}
                 </Typography.Text>
                 <button hidden={readonly} onClick={onDelete(i)}><DeleteIcon /></button>
               </span>
           )}
         onChange={onChange}
       />
     </div>

   </Suspense>
 }

 export default forwardRef<unknown, CrudListProps>(CrudList);
