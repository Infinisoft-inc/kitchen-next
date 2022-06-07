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

  const item = useStore(store, state => state?.list?.get?.(SK))

  const useMutator: UseMutator = (field, newValue) => store.mutate(prev => {
    prev.list.set(SK, {
      ...item,
      [field]: newValue
    })

    return { ...prev }
  }
  )

  const listMutator: UseListMutator = (field) => {

    const onAdd = <T>(newValue?: T) => {
      store.mutate(prev => {
        const arrayField = item[field] as T[]

        if (newValue) {
          arrayField.push(newValue)
        } else {
          arrayField.push()
        }

        prev.list.set(SK, {
          ...item,
          [field]: arrayField
        })

        return { ...prev }
      })
    }

    const onChange = <T>(index: number, newValue: T) => {
      store.mutate(prev => {
        const arrayField = item[field] as T[]
        arrayField.splice(index, 1, newValue)

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



  const inputMutator: InputMutator = (field) => useCallback((e) => useMutator(field, e?.target?.value), [field, useMutator])

  return {
    item,
    inputMutator,
    listMutator
  }
}

