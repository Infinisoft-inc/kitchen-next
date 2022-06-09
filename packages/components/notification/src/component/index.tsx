/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Module Federated Micro Component
 */
import React, { Suspense } from 'react';
import './index.module.css';


type NotificationState = {
  show: boolean;
  content: React.ReactNode
  header?: React.ReactNode
  duration?: number
  notification?: {
    show: (props: Pick<NotificationState, 'header' | 'content'>) => void,
    hide: () => void,
  }
  Notification: () => JSX.Element
}

const initialState: NotificationState = {
  show: false,
  content: 'Hi there',
  header: 'Coucouuuuu',
  Notification: () => <></>
}

const NotificationContext = React.createContext(initialState)

export const useNotification = () => {
  return React.useContext(NotificationContext)
}

const Slider = React.lazy(() => import(/* webpackChunkName: 'Slider' */ 'slider/Slider'))

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
    return <Suspense>
      <div data-style='ux:notification:container' data-state={`show=${show}`}>
        <Slider direction='left'>
          <div data-style='ux:notification:content' data-state={`show=${show}`}>
            {/* <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 10 }}> */}
            <div><h1>{header}</h1></div>
            <div><h4>{content}</h4></div>
            {/* </div> */}
            <button onClick={onClick}>Dismiss</button>
          </div>
        </Slider>
      </div>
    </Suspense>
  }

  return <Suspense><NotificationContext.Provider value={{ ...state, notification, Notification }}>{children}</NotificationContext.Provider></Suspense>
}

export default NotificationProvider
