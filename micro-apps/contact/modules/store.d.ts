declare module "store/types" {
    /**
     * Subscriber get notified on state change immutable only
     */
    export type SubscriberEventHandler<S = unknown, Payload = unknown> = (event: string, state?: State<S>, payload?: Payload) => void;
    export type Subscribers<S, Payload> = Map<Symbol, SubscriberEventHandler<S, Payload>>;
    /**
     * Publisher emit events with optionnal payload
     */
    export type PublisherEvent<Payload = unknown> = (event: string, payload?: Payload) => void;
    /**
     * Cookers are middlewares
     * responsible of cooking
     * data mutation/transformation
     */
    export type CookersEventHandler<S = unknown, Payload = unknown> = (event: string, state?: State<S>, payload?: Payload) => S;
    export type Cookers<S, Payload> = Map<Symbol, CookersEventHandler<S, Payload>>;
    /**
     * Mutate once
     * data mutation/transformation
     */
    export type Mutate<S = unknown> = (callback: (state: S) => S) => void;
    /**
     * Store State
     */
    export type State<S> = S | S[] | {
        [k: string]: S | S[];
    };
    export type StateListItem<I> = I;
    export type NormalizedState<K, S> = Map<K, S>;
    /**
     * Store input
     */
    export type Init<S> = () => Promise<S> | S;
    export type CreateStoreOptions<K extends keyof S, S, I> = {
        id?: K;
        normalizeKeys?: K[];
        keyPredicat?: (arg: I) => any;
    };
    /**
     * Store output
     */
    export type GetState<S> = () => S;
    export type GetNormalizedState<K, S> = () => NormalizedState<string, API.Item>;
    export type IStore<S, Payload, K = any> = {
        getSnapshot: () => S;
        getServerSnapshot: () => S;
        getNormalizedState: GetNormalizedState<K, S>;
        subscribe: (eventhandler: SubscriberEventHandler<S, Payload>) => () => void;
        publish: PublisherEvent<Payload>;
        cook: (eventhandler: CookersEventHandler<S, Payload>) => () => void;
        mutate: Mutate<S>;
    };
    /**
     * Store abstraction
     */
    export type Store = <S, Payload, K extends keyof S, I>(init?: Init<S>, options?: CreateStoreOptions<K, S, I>) => IStore<S, Payload, K>;
}
declare module "store/createstore" {
    import { Store } from "store/types";
    /**
     * Store Creator
     * @param init State initializer function
     * @returns new store
     */
    const createstore: Store;
    export default createstore;
}
declare module "bootstrap" {
    import createstore from "store/createstore";
    export * as types from "store/types";
    export default createstore;
}
