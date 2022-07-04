/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { IMicroStoreState } from "@/context/index";

/**
 * Initialize store state
 * @returns Promise Store state
 */
export const initializeStore = () => new Promise<IMicroStoreState>((resolve, reject) => {
    resolve({ dog: 'd', cat: 'd', user: '', bob: 1 })
})