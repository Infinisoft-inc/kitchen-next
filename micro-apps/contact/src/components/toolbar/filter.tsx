/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import React from "react";
import { useMetaModel } from "../../hooks/useMetaModel";

const Filter = () => {
  const meta = useMetaModel()
  const [filterActiveKey, setFilterActiveKey] = React.useState('All');
  // const [filters, setFilters] = React.useState<API.Meta>();
  // const { store } = useMicroContext()

  // React.useEffect(() => {
  //   if (!filters) {
  //     setFilters(meta?.subCategories)
  //   }

  // }, [filters, meta?.subCategories])

  const renderBadge = (count: number, active = false) => {
    return (<></>
      // <Badge
      //   count={count}
      //   className={active ? css.subCategoryBadgeActive : css.subCategoryBadge}
      // />
    );
  }

  const onChange = (event: any) => {
    const newValue = event.target.value
    setFilterActiveKey(newValue)

    // if (newValue === 'All') {
    //   store.publish('filter.clear')
    // }

    // if (newValue !== '' && newValue !== 'All') {
    //   store.publish('filter.add', newValue)
    // }

  }

  return <span data-style='filter:container:root'>
    {/* <Radio.Group value={filterActiveKey} onChange={onChange} > */}
      {/* {true &&
        <Radio.Button value={'All'} key={'All'} className={css.filterButton}>All</Radio.Button>
      } */}
      {/* {Object.entries(filters ?? {})?.sort(([, a], [, b]) => b - a).slice(0, 3)
        .map(([name, count], i) =>
          <Radio.Button value={name} key={i} className={css.filterButton}><span>{name}{renderBadge(count, filterActiveKey === name)} </span></Radio.Button>

        )
      } */}
    {/* </Radio.Group> */}
  </span>

}

export default Filter
