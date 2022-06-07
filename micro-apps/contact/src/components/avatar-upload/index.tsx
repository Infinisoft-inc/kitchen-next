/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from 'react';
import './index.css';

type AvatarUploadProps = {
  src?: string
  save: (bse64: string) => void
}

const AvatarUpload = ({ src = "https://cdn.pixabay.com/photo/2016/03/31/20/31/amazed-1295833__340.png", save }: AvatarUploadProps) => {
  const [state, setState] = React.useState({
    loading: false,
    imageUrl: src
  });

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {

    const file = new FileReader()
    if (e.target?.files?.[0]) {
      file.readAsDataURL(e.target.files[0])
      file.addEventListener('load', (e) => {
        setState({
          imageUrl: e.target?.result as string,
          loading: false,
        })
      })
    }

  };

  return <div>
    <fieldset>
      <label htmlFor='avatar'>
        <input type='file' onChange={onChange} id='avatar' style={{ display: 'none' }} />
        <img src={state.imageUrl} alt="avatar" style={{ width: '100%', maxWidth: '100px' }} />
      </label>
    </fieldset>
  </div>
}

export default AvatarUpload;
