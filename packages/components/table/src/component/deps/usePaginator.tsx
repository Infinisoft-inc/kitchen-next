import React, { startTransition, useMemo } from "react";
import { PaginatorProps } from "../types";

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

  const paginate = <T,>(_list?: Map<string, T>) => {
    return _list ? new Map(Array.from(_list).slice(_startIndex, _endIndex)) : new Map<string, T>()
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
