/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from 'react';
import './index.css';

type TableProps = {
  columns: string[]
  data: Map<string, API.Item>
}

const Table = ({ columns, data }: TableProps) => {
  const rows = []

  if (data) {
    for (let [k, v] of data.entries()) {

      rows.push(
        <tr key={`${k}-row`} id={k}>
          {columns.map((kk, i: number) =>
            // @ts-ignore
            <td key={k + `${i}`} id={k}>{String(v[kk])}</td>)
          }
        </tr>
      )
    }
  }


  return <table>
    <thead>
      <tr>
        {
          columns.map((t, i: number) => <th key={i + '-th'}>{t}</th>)
        }
      </tr>
    </thead>
    <tbody>
      {
        rows
      }
    </tbody>
  </table>
}

export default Table;
