/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { useMicroContext } from "@/context/micro"
import { useCallback } from "react"
import { InputMutator, UseItem, UseMutator } from "../types"
import { useStore } from "./usestore"

/**
 * Store item selector/mutator
 * @param SK Unique identifier
 * @returns item, mutator and inputMutator
 */
export const useItem: UseItem = (SK) => {
  const { store } = useMicroContext()

  const item = useStore(store, state => state?.list?.get?.(SK))

  const useMutator: UseMutator = (field, newValue) => store.mutate(prev => {
    prev.list.set(SK, {
      ...item,
      [field]: newValue
    })

    return { ...prev }
  }
  )

  const inputMutator: InputMutator = (field) => useCallback((e) => useMutator(field, e?.target?.value), [field, useMutator])

  return {
    item,
    inputMutator
  }
}

