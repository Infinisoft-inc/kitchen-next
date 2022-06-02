/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * CrudList Federated Micro Component
 */
 import React, { Suspense } from 'react';
import { AddIcon } from './assets/svg';
import css from './index.module.css';
import { CrudListProps } from './types';

 const InputText = React.lazy(() => import(/* webpackPrefetch: true */'inputtext/InputText'));
 const FlexLine = React.lazy(() => import(/* webpackPrefetch: true */'flexline/FlexLine'));


 export const CrudList = ({
   title,
   icon,
   list=[],
   onAdd,
   onChange,
   onRemove
 }: CrudListProps) => {

   return <Suspense>
     <div className={css.root}>
       <FlexLine
         left={icon}
         right={
           <div className={css.list}>
             <div className={css.header}>
               {title}
               <button onClick={onAdd}><AddIcon /></button>
             </div>
             <div className={css.content}>
               {
                 list?.map(
                   (item, i: number) =>
                     <InputText key={i} value={String(item)} onChange={e => onChange(i, item, e.target.value)} onRemove={() => onRemove(i, item)} copyable removable />
                 )
               }
             </div>
           </div>
         }
       />
     </div>
   </Suspense>
 }

 export default CrudList;
