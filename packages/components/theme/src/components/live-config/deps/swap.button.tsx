/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { Button, Tooltip } from 'antd';
import React from 'react';

export type SwapButtonProps = {
    /**
     * Button inner content
     */
    label: React.ReactNode
    /**
     * Tooiltip inner content
     */
    tooltip: React.ReactNode
    /**
     * Action callback
     */
    actionCallback: () => void

};

export const SwapButton: React.FC<SwapButtonProps> = ({tooltip, label, actionCallback=()=>{}}) => {
    return <Tooltip title={tooltip}><Button type='text' style={{padding: 0, margin: 0, height:'16px'}} onClick={actionCallback}>{label}</Button></Tooltip>
}

export default SwapButton