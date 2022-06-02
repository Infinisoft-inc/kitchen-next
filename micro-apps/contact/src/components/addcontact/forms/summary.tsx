/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { Typography } from 'antd';
import React, { useId } from 'react';
import css from './index.css';

type SummaryProps = {
  values: API.Item | null,
  errors?: string[]
  hide?: string[]
  editable?: boolean
  variant?: 'horizontal' | 'vertical'
}

const Summary: React.FC<SummaryProps> = ({ hide = [], editable = true, errors = [], values, variant = 'vertical' }) => {
  const isError = errors.length > 0
  const id = useId()

  return <div className={css[`summary-${variant}`] + ` invariant`}>
    {
      isError && <ol style={{ textAlign: 'left' }}>
        <Typography.Text type='danger' style={{ marginBottom: '1rem' }}>
          Please fix these errors:
        </Typography.Text>
        {errors?.map((e) => {
          return <li key={`${e}${id}`}>
            {e}
          </li>
        })}
      </ol>
    }

  </div>;
}
export default Summary

