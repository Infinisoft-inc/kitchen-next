/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import React, { useMemo } from 'react';
import usePaginator from './deps/usePaginator';
import css from './index.module.css';
import { TableProps } from './types';

const Paginator = React.lazy(() => import(/* webpackChunkName: 'Paginator' */ './deps/paginator'))


const Table = <T,>({ columns, data, options = {} }: TableProps<T>) => {
  const { pagination = true, rowPerPage = 10 } = options
  const { paginate, handleGotoPage, currentPage, _numberOfPage } = usePaginator({ rowPerPage, count: Object.keys(data ?? {}).length, nextToken: '000' })
  const [pageSize,] = React.useState(rowPerPage);
  const [nextToken,] = React.useState('mocktoken');
  const pagedList = useMemo(() => pagination ? paginate(data) : data, [pagination, paginate, data])

  const rows: any[] = []

  if (data && pagedList) {
    Object.keys(pagedList).forEach((rowKey)=>{
      const rowColumns = pagedList[rowKey]

      const row = <tr key={`${rowKey}-row-${new Date().getTime().toFixed(0)}`} id={rowKey}>
        {
          Object.keys(columns).map((columnsKey = '', i) => <td className={css[columns?.[columnsKey]?.responsive ?? ''] ?? ''} key={`${rowKey}-${i}`} id={rowKey}>
            {
              // @ts-ignore
              columns[columnsKey]?.render?.(rowColumns) ?? String(rowColumns?.[columnsKey] ?? '')}
          </td>
          )
        }
      </tr>

      rows.push(row)
    })
  }


  return <><table>
    <thead>
      <tr>
        {Object.keys(columns).map((t, i: number) => <th className={css[columns[t]?.responsive ?? ''] ?? ''} key={i + '-th'}><h4>{t}</h4></th>)}
      </tr>
    </thead>

    <tbody key={'jhvljkhdlfk' +  rows?.length}>
      {rows}
    </tbody>

  </table>

    {pagination &&  <Paginator currentPage={currentPage} handleGotoPage={handleGotoPage} numberOfPage={_numberOfPage} rowPerPage={pageSize} nextToken={nextToken} />}
  </>
}

export default Table;
