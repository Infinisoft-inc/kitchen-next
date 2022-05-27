/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * ContactDetails Federated Micro Component
 */
import { Typography } from 'antd';
import React, { ForwardedRef, forwardRef, Suspense } from 'react';
import css from './index.module.css';
import type { ContactDetailProps } from './types';

const FlexLine = React.lazy(() => import(/*webpackPreload: true*/'flexline/FlexLine'));
const FlexCol = React.lazy(() => import(/*webpackPreload: true*/'flexcol/FlexCol'));


export const ContactDetails = ({icon, title, onChange=false, editableFieldName='', content, ...props}: ContactDetailProps, ref: ForwardedRef<unknown>) => {
  // const onEdit = () => {

  //   if (editableFieldName.length < 1) {
  //     return false
  //   }

  //   return {
  //     onChange
  //   }
  // }

  return <Suspense><FlexCol><FlexLine
    left={<span className={css.left}>{icon}</span>}

    right={<>
      <Typography.Title {...props} level={4}>
        {title}
      </Typography.Title>
      <Typography.Text editable={onChange} className={`invariant ${css.content}`}>{content}</Typography.Text></>}
  />
  </FlexCol>
  </Suspense>
}

export default forwardRef<unknown, ContactDetailProps>(ContactDetails);
