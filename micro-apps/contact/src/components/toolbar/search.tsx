/**
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
import { useMicroContext } from "@/context/micro";
import React, { useRef } from "react";

const Search = () => {
  const { store } = useMicroContext()
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSearch = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && inputRef?.current?.value) {
      store.emit('search.term', inputRef.current.value)
    }

    if (e.key === 'Enter' && String(inputRef?.current?.value).length <= 0) {
      store.emit('search.clear')
    }
  }

  const handleInput = () => {
    if (String(inputRef?.current?.value).length <= 0) {
      store.emit('search.clear')
    }
  }


  return <div data-style='search:container:root'>
    <input data-tag='contact' ref={inputRef} data-style='search:container:control' type='search' placeholder='What are you searching ?' onKeyDown={handleSearch} onInput={handleInput} />
  </div>
}

export default Search
