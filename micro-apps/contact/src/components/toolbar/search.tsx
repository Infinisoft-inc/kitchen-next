/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { Input } from "antd";
import React from "react";

const Search = () => {

  const handleSearch = (term: string) => {}

  return <div data-style='search:container:root'><Input.Search placeholder='What are you searching ?' allowClear onChange={e => handleSearch(e.target.value)} onSearch={handleSearch} /></div>
}

export default Search
