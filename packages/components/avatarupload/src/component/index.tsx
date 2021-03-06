/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React, { Suspense } from 'react';
import { defaultAvatar } from './assets';
import './index.module.css';
import { AvatarUploadProps } from './types';

const _defaultConfig = {
  src: defaultAvatar
}



const AvatarUpload = ({ src = _defaultConfig.src, save }: AvatarUploadProps) => {


  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {

    const file = new FileReader()
    if (e.target?.files?.[0]) {
      file.readAsDataURL(e.target.files[0])
      file.addEventListener('load', (e) => {
        const imageUrl = e.target?.result as string
        if (imageUrl) {
          save?.(imageUrl)
        }
      })
    }

  };

  return <Suspense>
    <fieldset data-style={'avatar:upload:fieldset'}>
      <label htmlFor='avatar'>
        <input type='file' onChange={onChange} id='avatar' style={{ display: 'none' }} />
        <img src={src} alt="avatar" style={{ width: '100%', maxWidth: '100px' }} />
      </label>
    </fieldset>
  </Suspense>
}

export default AvatarUpload;
