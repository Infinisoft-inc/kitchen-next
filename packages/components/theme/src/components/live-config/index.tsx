/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { capitalizeFirst, downloadJSON } from "@infini-soft/utils";
import { Drawer, notification, Typography, Upload } from 'antd';
import Button from 'antd/lib/button';
import type { UploadChangeParam, UploadFile, UploadProps } from "antd/lib/upload/interface";
import React from 'react';
import type { UseThemeOutput } from '../../hooks/useTheme';
import defaultTheme from '../../themes/default';
import type { Theme } from '../../types';
import { ConfigIcon, SwapIcon } from './assets/svg';
import SwapButton from "./deps/swap.button";
import './index.css';

export type LiveConfigProps = UseThemeOutput

export const LiveConfig: React.FC<LiveConfigProps> = ({ ThemeSwitch, theme, resetTheme, onTokenChange, tokenChange }) => {
    const [visible, setVisible] = React.useState(false);
    const oppositeMode = React.useMemo(() => theme.active === 'dark' ? 'light' : 'dark', [theme.active])

    const props: UploadProps = {
        beforeUpload: (file: File) => {
            const isJSON = file.type === 'application/json';
            if (!isJSON) {
                notification.error({ message: `Cannot import ${file.name}, JSON files only!` });
            }
            return isJSON || false;
        },
        onChange: async (info: UploadChangeParam<UploadFile<any>>) => {
            if (info.fileList[0].percent === 100) {
                info.fileList[0].originFileObj?.text()
                    .then((serializedTheme: string) => {
                        try {
                            const importTheme: Theme = JSON.parse(serializedTheme)
                            resetTheme(importTheme)
                            notification.success({ message: `${capitalizeFirst(importTheme.name)} theme imported`, key: "upload", placement: 'bottomRight' })
                        } catch (err) {
                            console.error(err)
                        }
                    })
                    .catch((err) => {
                        console.error(err)
                        notification.error({ message: `Unable to import theme!`, key: "upload", placement: 'bottomRight' })
                    })
            }
        },
        accept: '.json',
        showUploadList: false,
        maxCount: 1
    };

    const resetDefault = () => {
        resetTheme(defaultTheme)
    }

    return <>
        <Button className={'configBtn'} icon={<ConfigIcon />} size={'large'} onClick={() => setVisible(true)} />
        <Drawer
            destroyOnClose
            onClose={() => setVisible(false)}
            visible={visible}
            title={
                <Typography.Title level={2} className='invariant drawer-title'>{capitalizeFirst(`${theme.name} `)} theme</Typography.Title>
            }
            bodyStyle={{ padding: '0.5rem 2rem' }}
        >
            <span className={'section-actions'}>
                <Typography.Link className={'section-text'} onClick={resetDefault} >Reset default</Typography.Link>

                <Typography.Text>{` | `}</Typography.Text>


                <Upload {...props}>
                    <Typography.Link className={'section-text'}>
                        Import
                    </Typography.Link>
                </Upload>


                <Typography.Text>{` | `}</Typography.Text>
                <Typography.Link className={'section-text'} onClick={() => { downloadJSON(theme, "theme.json") }} >Export</Typography.Link>
            </span>

            <Typography.Title level={4} className='invariant section-title'>Configuration</Typography.Title>
            <ThemeSwitch /><Typography.Text className='invariant' style={{ marginLeft: '2rem' }}>{capitalizeFirst(`${theme.active} mode `)}</Typography.Text>

            {
                Object.entries(theme?.[theme.active]).map(([k, v], i) => {
                    const getOppositeThemeValue = (key: string) => theme?.[oppositeMode]?.[k]?.[key] ?? 'unknown'

                    return <span key={`title${i}`}>
                        <Typography.Title level={4} className='invariant section-title'>{capitalizeFirst(k)}</Typography.Title>

                        <div className={'liveContainer'}>
                            <input key={`Primary${i}`} type='color' onBlur={e=>tokenChange(k, v, 'primary', e.target.value, true)} onChange={onTokenChange(k, v, 'primary')} value={v.primary} style={{ marginRight: '2rem' }} />
                            <Typography.Text style={{ marginRight: '1rem' }}>Primary</Typography.Text>
                            <Typography.Text copyable style={{ marginRight: '0.5rem' }}>{v.primary}</Typography.Text>
                            <SwapButton
                                tooltip={`Use ${oppositeMode} mode color ${getOppositeThemeValue("primary")}`}
                                label={<SwapIcon />}
                                actionCallback={() => {tokenChange(k,v,"primary",getOppositeThemeValue("primary"), true)}}
                            />
                        </div>

                        <div className={'liveContainer'}>
                            <input key={`Secondary${i}`} type='color' onBlur={e=>tokenChange(k, v, 'secondary', e.target.value, true)}  onChange={onTokenChange(k, v, 'secondary')} value={v.secondary} style={{ marginRight: '2rem' }} />
                            <Typography.Text style={{ marginRight: '1rem' }}>Secondary</Typography.Text>
                            <Typography.Text copyable style={{ marginRight: '0.5rem' }}>{v.secondary}</Typography.Text>
                            <SwapButton
                                tooltip={`Use ${oppositeMode} mode color ${getOppositeThemeValue("secondary")}`}
                                label={<SwapIcon />}
                                actionCallback={() => {tokenChange(k,v,"secondary",getOppositeThemeValue("secondary"),true)}}
                            />
                        </div>

                        <div className={'liveContainer'}>
                            <input key={`Contrast${i}`} type='color' onBlur={e=>tokenChange(k, v, 'contrast', e.target.value, true)}  onChange={onTokenChange(k, v, 'contrast')} value={v.contrast} style={{ marginRight: '2rem' }} />
                            <Typography.Text  style={{ marginRight: '1rem' }}>Contrast</Typography.Text>
                            <Typography.Text copyable style={{ marginRight: '0.5rem' }}>{v.contrast}</Typography.Text>
                            <SwapButton
                                tooltip={`Use ${oppositeMode} mode color ${getOppositeThemeValue("contrast")}`}
                                label={<SwapIcon />}
                                actionCallback={() => {tokenChange(k,v,"contrast",getOppositeThemeValue("contrast"),true)}}
                            />
                        </div>
                    </span>
                })
            }
        </Drawer >
    </>;
}
export default LiveConfig