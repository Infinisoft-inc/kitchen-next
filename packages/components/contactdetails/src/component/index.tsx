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

const FlexLine = React.lazy(() => import('flexline/FlexLine'));
const FlexCol = React.lazy(() => import('flexcol/FlexCol'));


const ContactDetails = ({icon, title, onChange=()=>{}, editableFieldName='', content, ...props}: ContactDetailProps, ref: ForwardedRef<unknown>) => {
  const onEdit = () => {

    if (editableFieldName.length < 1) {
      return false
    }

    return {
      onChange
    }
  }

  return <Suspense><FlexCol><FlexLine
    left={<span className={css.left}>{icon}</span>}

    right={<>
      <Typography.Title {...props} level={4}>
        {title}
      </Typography.Title>
      <Typography.Text editable={onEdit()} className={`invariant ${css.content}`}>{content}</Typography.Text></>}
  />
  </FlexCol>
  </Suspense>
}

export default forwardRef<unknown, ContactDetailProps>(ContactDetails);
