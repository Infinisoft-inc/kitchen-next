/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 *
 * Paginator Federated Micro Component
 */
import css from '../index.module.css';

const Paginator = <T,>({ numberOfPage, handleGotoPage, currentPage }: any) => <div className={css.paginatorContainer}>

  {new Array(numberOfPage).fill(0).map((a, i) =>
    <span key={`page-${i + 1}`} onClick={() => { handleGotoPage?.(i + 1) }} data-tag='paginatorItem' className={(i + 1) === currentPage ? css['paginatorItemActive'] : css['paginatorItem']}>
      {i + 1}
    </span>
  )
  }

</div>




export default Paginator;
