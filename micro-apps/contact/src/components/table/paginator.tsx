/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

// import '@/style';
import React, { useMemo } from 'react';
import './index.css';


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

  return <div className='paginator-container'>
    {new Array(_numberOfPage).fill(0).map((a, i) =>
      <span key={`page-${i + 1}`} className={i + 1 === currentPage ? 'paginator-item:active' : 'paginator-item'}>
        {i + 1}
      </span>
    )
    }

  </div>
}

export default Paginator;
