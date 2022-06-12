/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * TopBar Federated Micro Component
 */
import { ForwardedRef, forwardRef, Suspense, useEffect } from 'react';
import css from './index.module.css';
import { TopBarProps } from './types';

const useTheme = <T extends { [k: string]: any },>(props?: T, overrideTokens?: boolean) => {
  useEffect(() => {
    if (overrideTokens) {
      const setCssVar = (name: string, val: string) => document.querySelector<HTMLElement>(":root")?.style?.setProperty(name, val)

      let k: string;
      for (k in props) {
        if (props?.[k] && typeof props[k] === 'string') {
          setCssVar(`--topbar-${k}`, props[k]! as string)
        }
      }
    }
  }, [props])
}

const TopBar = ({ overrideTokens = false, ...props }: TopBarProps, ref: ForwardedRef<HTMLDivElement>) => {
  useTheme(props, overrideTokens)

  return <Suspense>
    <div className={css.root} ref={ref}>
      <div className={css.menu}>
        {
          props?.brandImageUrl &&
          <img src={props.brandImageUrl} className={css.brandImage} />
        }

        {
          props?.brandComponent &&
          <>{props.brandComponent}</>
        }
      </div>

      <div className={css.item}>
        {props.menuComponent}
      </div>
    </div>
  </Suspense>
}

export default forwardRef<HTMLDivElement, TopBarProps>(TopBar);
