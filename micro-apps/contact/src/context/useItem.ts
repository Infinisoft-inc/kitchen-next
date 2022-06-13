// /*
//  * Copyright © All rights reserved 2022
//  * Infinisoft Inc.
//  * www.infini-soft.com
//  */

import { useCallback } from "react"
import { useStore } from "../../../../packages/libraries/store/src/lib/usestore"
import { MicroPayload, MicroState, useMicroContext } from "./micro"



export type CrudMutators = {
  onAdd: <T>(newValue?: T) => void
  onChange: <T>(index: number, newValue: T) => void
  onRemove: (index: number) => void
}
export type InputListMutatorGeneric<T, E> = (field: T) => (e: E) => void


export type InputMutatorGeneric<T, E> = (field: T) => (e: E) => void
export type UseListMutatorGeneric<T, R> = (field: T) => R

export type Destroy = () => void

//******************************** */


/**
 * Store item selector/mutator
 * @param SK Unique identifier
 * @returns item, mutator and inputMutator
 */

type S = MicroState
type P = MicroPayload

type Selector<S> = (a: S) => S
export const useItem = (id: string) => {
  const { store } = useMicroContext()
  const item = useStore(store, a=>a?.list?.get?.(id))

  // @ts-ignore

  const useMutator = (field: keyof S, newValue: unknown) => store.mutate(prev => {

    prev?.list?.set?.(id, {
      ...item,
      [field]: newValue
    })

    return { ...prev }
  }
  )

  const listMutator = (field: string) => {

    const onAdd = (newValue?: any) => {
      // @ts-ignore
      store.mutate(prev => {
          // @ts-ignore
        const arrayField = item[field]

        if (newValue && Array.isArray(arrayField)) {
          arrayField.push(newValue)
        }

        prev?.list?.set?.(id, {
          ...item,
          [field]: arrayField
        })

        return { ...prev }
      })
    }

    const onChange = (index: number, newValue: any) => {
      // @ts-ignore
      store.mutate(prev => {
          // @ts-ignore
        const arrayField = item[field]

        if (newValue && Array.isArray(arrayField)) {
          arrayField.splice(index, 1, newValue)
        }


        // @ts-ignore
        prev?.list?.set?.(id, {
          ...item,
          [field]: arrayField
        })

        return { ...prev }
      })
    }

    const onRemove = (index: number) => {
      // @ts-ignore
      store.mutate(prev => {
          // @ts-ignore
        const arrayField = item[field]
        // @ts-ignore
        delete arrayField?.[index]

        // @ts-ignore
        prev.list.set(id, {
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

  // @ts-ignore
  const destroy = () => store.mutate(prev => {
    prev?.list?.delete?.(id)

    return prev
  })


  // @ts-ignore

  const inputMutator: InputMutator = (field) => useCallback((e) => useMutator(field, e?.target?.value), [field, useMutator])

  return {
    item,
    inputMutator,
    listMutator,
    useMutator,
    destroy
  }
}

