/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Module Federated Micro Component
 */
import React, { Suspense } from 'react';


type NotificationState = {
  show: boolean;
  content: React.ReactNode
  header?: React.ReactNode
  // duration?: number
  notification?: {
    show: (props: Pick<NotificationState, 'header' | 'content'>) => void,
    hide: () => void,
  }
  Notification?: () => JSX.Element
}

const initialState: NotificationState = {
  show: false,
  content: 'Hi there',
  header: 'Coucouuuuu',
}

const NotificationContext = React.createContext(initialState)

export const useNotification = () => {
  return React.useContext(NotificationContext)
}


const NotificationProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = React.useState(initialState)

  const notification = React.useMemo(() => ({
    show: ({ header, content }: Pick<NotificationState, 'header' | 'content'>) => { setState(prev => ({ ...prev, show: true, content, header })) },
    hide: () => { setState(prev => ({ ...prev, show: false })) },
  }), [])

  const Notification = () => {
    const { show, header, content } = state
    const onClick = () => {
      notification.hide()
    }
    return <Suspense>{show &&
      <div className='notif-container'>
        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}>
          <div><h1>{header}</h1></div>
          <div><h4>{content}</h4></div>
        </div>
        <button style={{ marginRight: 10, marginBottom: 20 }} onClick={onClick}>X</button>
      </div>}</Suspense>
  }

  return <Suspense><NotificationContext.Provider value={{ ...state, notification, Notification }}>{children}</NotificationContext.Provider></Suspense>
}

export default NotificationProvider
