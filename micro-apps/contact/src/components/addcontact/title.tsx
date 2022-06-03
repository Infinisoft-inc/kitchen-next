/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import React from 'react';

export type TitleProps = {
  title: React.ReactNode
  subtitle: React.ReactNode
};

const FlexContainer = React.lazy(() => import(/* webpackChunkName: 'FlexContainer' */ 'flexcontainer/FlexContainer'))
const FlexItem = React.lazy(() => import(/* webpackChunkName: 'FlexItem' */ 'flexitem/FlexItem'))

export const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return <FlexContainer>
    <FlexItem>
      <div>{title}</div>
      <div>{subtitle}</div>
    </FlexItem>
    <FlexItem>
        Progress bar
    </FlexItem>
  </FlexContainer>

}
export default Title
