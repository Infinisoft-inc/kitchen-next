/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React, { startTransition, useMemo } from 'react';
import css from './index.css';
import { PaginatorProps } from './types';

export const Paginator = <T,>({numberOfPage, handleGotoPage, currentPage}: any) => <div className={css.paginatorContainer}>

{new Array(numberOfPage).fill(0).map((a, i) =>
  <span key={`page-${i + 1}`} onClick={() => { handleGotoPage?.(i + 1) }} data-tag='paginatorItem' className={(i + 1) === currentPage ? css['paginatorItemActive'] : css['paginatorItem']}>
    {i + 1}
  </span>
)
}

</div>

export const usePaginator = <T,>({ rowPerPage, count = 1, nextToken }: PaginatorProps<T>) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const _startIndex = useMemo(() => (currentPage-1) * rowPerPage, [currentPage, rowPerPage])
  const _endIndex = useMemo(() => (currentPage - 1) * rowPerPage + rowPerPage, [currentPage, rowPerPage])
  const _numberOfPage = useMemo(() => {
    startTransition(()=>{setCurrentPage(1)})
    return Math.ceil(count / rowPerPage)
  }, [count, rowPerPage])

  const handleNextPage = () => {
    startTransition(() => {
      setCurrentPage(prev => prev + 1)
    })
  }

  const handleBackPage = () => {
    startTransition(() => {
      setCurrentPage(prev => prev - 1)
    })
  }

  const handleGotoPage = (_page: number) => {
    startTransition(() => {
      setCurrentPage(_page)
    })
  }

  const paginate = (_list?: Map<string, API.Item>) => {
    return _list ? new Map(Array.from(_list).slice(_startIndex, _endIndex)) : new Map<string, API.Item>()
  }

  return {
    _numberOfPage,
    handleBackPage,
    handleGotoPage,
    handleNextPage,
    currentPage,
    paginate
  }
}

export default usePaginator;
