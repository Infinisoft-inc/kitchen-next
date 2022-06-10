/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

// import '@/style';
import React, { startTransition, useMemo } from 'react';
import css from './index.css';


type PaginatorProps<T> = {
  rowPerPage: number
  nextToken: string | number
  count?: number

}

const Paginator = <T,>({ rowPerPage, count = 1, nextToken }: PaginatorProps<T>) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const _startIndex = useMemo(() => currentPage * rowPerPage - 1, [currentPage, rowPerPage])
  const _endIndex = useMemo(() => currentPage * rowPerPage - 1 + rowPerPage, [currentPage, rowPerPage])
  const _numberOfPage = useMemo(() => Math.ceil(count / rowPerPage), [rowPerPage])

  const handleNextPage = () => {
    startTransition(()=> {
      setCurrentPage(prev=>prev+1)
    })
  }

  const handleBackPage = () => {
    startTransition(()=> {
      setCurrentPage(prev=>prev-1)
    })
  }

  const handleGotoPage = (_page: number) => {
    startTransition(()=> {
      setCurrentPage(_page)
    })
  }

  return <div className={css.paginatorContainer}>
    {new Array(_numberOfPage).fill(0).map((a, i) =>
      <span key={`page-${i + 1}`} onClick={()=>{handleGotoPage(i+1)}} className={(i + 1) === currentPage ? css['paginatorItemActive'] : css['paginatorItem']}>
        {i + 1}
      </span>
    )
    }

  </div>
}

export default Paginator;
