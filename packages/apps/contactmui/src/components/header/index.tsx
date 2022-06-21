/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import { Suspense } from "react"
import styles from './index.css'

const Header = () => <Suspense fallback={'loading..'}>
  <div  className={styles.header}>
    <h1>Contacts</h1>
  </div>
</Suspense>

export default Header
