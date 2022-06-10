/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

// import '@/style';
import React from 'react';
import './index.css';


type TableRowConfig<T> = {
  render?: (row: T) => React.ReactNode
  sort?: () => void
}

type TableProps<T> = {
  columns: Record<string, TableRowConfig<T>>
  data?: Map<string, T>
}

const Table = <T,>({ columns, data }: TableProps<T>) => {
  const rows = []


  if (data) {
    for (let [rowKey, rowColumns] of data.entries()) {

      const cols = Object.keys(columns).map((columnsKey, i) => columns[columnsKey]?.render
        ?
        columns[columnsKey]?.render?.(rowColumns)
        :
        //@ts-ignore
        rowColumns[columnsKey] ? String(rowColumns[columnsKey]) : null
      )

      const row = <tr key={`${rowKey}-row-${new Date().getTime().toFixed(0)}`} id={rowKey}>
        {cols.map((c = ' ', i) =>
          <td key={`${rowKey}-${i}-${c}`} id={rowKey}>{c}</td>
        )}
      </tr>

      rows.push(row)
    }
  }


  return <><table>
    <thead>
      <tr>
        {Object.keys(columns).map((t, i: number) => <th key={i + '-th'}><h4>{t}</h4></th>)}
      </tr>
    </thead>

    <tbody>
      {rows}
    </tbody>

  </table>

  {/* <usePaginator count={36} rowPerPage={5} nextToken="dddd" /> */}
  </>
}

export default Table;
