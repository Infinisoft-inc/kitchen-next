/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

import React from "react"

export type ResponsiveProps = Partial<React.HTMLAttributes<HTMLElement>> & {

  /**
   * Show upper range dimensions
   * default display is none
   *
   * mobile: always display
   * tablet: show from width 480px and upper
   * laptop: show from width 768px and upper
   * desktop: show from width 1024px and upper
   * uhd: show from width 1200 px and upper
   */
  showUp: "mobile" | "tablet" | "laptop" | "desktop" | "uhd"
}
