
/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */
// export type Snapshot<T> = T;

// export type Predicat = <T = unknown>(...args: T[]) => T
export type EventHandler<State, Payload> = (event: string, state?: State, payload?: Payload) => void
export type EventEmitter<State, Payload> = (event: string, payload?: Payload) => State
export type NotifyAllSubscribers<Payload> = (event: string, payload?: Payload) => void

// export type ICrud<T = unknown> = {
//   add: (item: T) => void;
//   change: (predicat: Predicat) => void;
//   remove: (predicat: Predicat) => void;
//   edit: (predicat: () => T) => void;
//   commit: (item: number) => void;
//   clear: () => void;
// };

export type IStore<State = unknown, Payload = unknown> = {
  subscribe: (eventhandler: EventHandler<State, Payload>) => () => void;
  getSnapshot: () => State | undefined;
  getServerSnapshot?: () => State | undefined;
  emit:  NotifyAllSubscribers<Payload>
}

export type Store = <State>(init?: State | (() => Promise<State>) | undefined) => IStore<State>
