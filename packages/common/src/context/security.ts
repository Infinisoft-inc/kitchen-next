/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { Contact, Meta, Unique } from "../models"

export type SecurityContext<T=any> = Unique & Contact & T & Meta
