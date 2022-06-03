/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { Input } from "antd";
import React from "react";
import { useMicroContext } from "../../context/micro";

const Search = () => {
  const { store } = useMicroContext()
  const handleSearch = (term: string) => { store.publish('search.term', term) }

  return <div data-style='search:container:root'><Input.Search placeholder='What are you searching ?' allowClear onChange={e => handleSearch(e.target.value)} onSearch={handleSearch} /></div>
}

export default Search
