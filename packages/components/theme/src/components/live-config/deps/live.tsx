/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { Typography } from 'antd';
import React from 'react';
import style from "../index.css";

export type LiveProps = {
    field: string
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined
};

export const Live: React.FC<LiveProps> = ({ field, value, onChange }) => {
    return <div className={style.liveContainer}>
        <input type='color' onChange={onChange} value={value} style={{ marginRight: '2rem' }} />
        
        <Typography.Text>{field}</Typography.Text>
    </div>;
}
export default Live