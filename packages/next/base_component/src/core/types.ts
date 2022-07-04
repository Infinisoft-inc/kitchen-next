/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from "react"
import { IMicroContext } from "./context"

export type IConfig = {
    /**
     * Enable Store Devtools and Verbose Logging
     */
    devtools: boolean
}

export type ILogger = typeof console.log

export type ICoreProps = {
    getToken?: (tokenList: string[]) => string
    key?: React.Key
    context?: IMicroContext
}