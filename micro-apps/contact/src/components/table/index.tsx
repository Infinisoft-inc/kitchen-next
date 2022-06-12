/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import './index.css';
import css from './responsive.css';
import { TableProps } from './types';


const Table = <T,>({ columns, data }: TableProps<T>) => {
  const rows = []

  if (data) {
    for (let [rowKey, rowColumns] of data.entries()) {

      const row = <tr key={`${rowKey}-row-${new Date().getTime().toFixed(0)}`} id={rowKey}>
        {
          Object.keys(columns).map((columnsKey='', i) => <td className={css[columns?.[columnsKey]?.responsive??''] ?? ''} key={`${rowKey}-${i}`} id={rowKey}>
            {
              // @ts-ignore
              columns[columnsKey]?.render?.(rowColumns) ?? String(rowColumns?.[columnsKey] ?? '')}
          </td>
          )
        }
      </tr>

      rows.push(row)
    }
  }


  return <><table>
    <thead>
      <tr>
        {Object.keys(columns).map((t, i: number) => <th className={css[columns[t]?.responsive?? ''] ?? ''} key={i + '-th'}><h4>{t}</h4></th>)}
      </tr>
    </thead>

    <tbody>
      {rows}
    </tbody>

  </table>
  </>
}

export default Table;
