/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { useMicroContext } from "@/context/micro"
import { useCallback } from "react"
import { InputMutator, UseItem, UseListMutator, UseMutator } from "../types"
import { useStore } from "./usestore"

/**
 * Store item selector/mutator
 * @param SK Unique identifier
 * @returns item, mutator and inputMutator
 */
export const useItem: UseItem = (SK) => {
  const { store } = useMicroContext()

  const item = useStore(store, state => state?.list?.get?.(SK)!)

  const useMutator: UseMutator = (field, newValue) => store.mutate(prev => {
    prev.list.set(SK, {
      ...item,
      [field]: newValue
    })

    return { ...prev }
  }
  )

  const listMutator: UseListMutator = (field) => {

    const onAdd = (newValue?: any) => {
      store.mutate(prev => {
        const arrayField = item[field]

        if (newValue && Array.isArray(arrayField)) {
          arrayField.push(newValue)
        }

        prev.list.set(SK, {
          ...item,
          [field]: arrayField
        })

        return { ...prev }
      })
    }

    const onChange = (index: number, newValue: any) => {
      store.mutate(prev => {
        const arrayField = item[field]

        if (newValue && Array.isArray(arrayField)) {
          arrayField.splice(index, 1, newValue)
        }


        prev.list.set(SK, {
          ...item,
          [field]: arrayField
        })

        return { ...prev }
      })
    }

    const onRemove = (index: number) => {
      store.mutate(prev => {
        const arrayField = item[field] as any[]
        delete arrayField[index]

        prev.list.set(SK, {
          ...item,
          [field]: arrayField
        })

        return { ...prev }
      })
    }

    return {
      onAdd,
      onChange,
      onRemove
    }
  }

  const destroy = () => store.mutate(prev => {
    prev.list.delete(SK)

    return prev
  })



  const inputMutator: InputMutator = (field) => useCallback((e) => useMutator(field, e?.target?.value), [field, useMutator])

  return {
    item,
    inputMutator,
    listMutator,
    useMutator,
    destroy
  }
}

