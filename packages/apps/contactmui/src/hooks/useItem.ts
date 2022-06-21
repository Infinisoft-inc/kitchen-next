/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { InputMutator, MicroPayload, MicroState, useMicroContext } from "@/context/micro"
import { Item } from "@/models"
import { useStore } from "@infini-soft/store/src/lib/usestore"
import { useCallback } from "react"

export type CrudMutators = {
  add: <T>(newValue?: T) => void
  update: <T>(index: number, newValue: T) => void
  remove: (index: number) => void
}
export type InputListMutatorGeneric<T, E> = (field: T) => (e: E) => void
export type InputMutatorGeneric<T, E> = (field: T) => (e: E) => void
export type UseListMutatorGeneric<T, R> = (field: T) => R
export type Remove = () => void
type S = MicroState
type P = MicroPayload

/**
 * CRUD Item in list
 * @param id Item id
 * @returns Mutators, item, factory
 */
export const useItem = (id: string) => {
  const { store } = useMicroContext()
  const item = useStore<S, P,  Item>(store, a => a?.list[id])

  /**
   * onChange handler
   * @param field Field name
   * @returns Mutation handler
   */
  const onMutation = (field: string) => (newValue: unknown) => {
    mutation(field, newValue)
  }

  /**
   * Field mutation inside item
   * @param field     Field name
   * @param newValue  New value
   */
  const mutation = (field: string, newValue: unknown) => {
    store.mutate(prev => {
      return {
        ...prev,
        list: {
          ...prev.list,
          [id]: {
            ...prev.list[id],
            [field]: newValue
          }
        }
      }
    }
    )
  }


  /**
   * Remove object from list
   */
  const remove = () => {
    store.mutate(prev => {
      let copy = Object.assign({}, prev?.list)
      delete copy[id]
      return {
        ...prev,
        list: {
          ...copy,
        }
      }
    })
  }

  /**
   * List mutators factory
   * @param field Target Array
   * @returns Array field mutators
   */
  const listMutatorsFactory = (field: string) => {
    const arrayField = item?.[field]

    const add = (newValue: any) => {
      if (!Array.isArray(arrayField) || !newValue) return;

      mutation(field, [newValue, ...arrayField])
    }

    const update = (index: number, newValue: any) => {
      if (!Array.isArray(arrayField) || !newValue) return;

      mutation(field, arrayField.map((item, _idx) => index === _idx ? newValue : item))
    }

    const remove = (index: number) => {
      if (!Array.isArray(arrayField)) return;

      mutation(field, arrayField.filter((_, _idx) => index !== _idx))
    }

    return {
      add,
      update,
      remove
    }
  }

  /**
   * Input Field onChange Handler
   * @param field Target field name
   * @returns Field mutator
   */
  const inputMutator: InputMutator = (field) => useCallback((e) => mutation(field, e?.target?.value), [field, mutation])

  return {
    item,
    inputMutator,
    listMutatorsFactory,
    mutation,
    onMutation,
    remove
  }
}

