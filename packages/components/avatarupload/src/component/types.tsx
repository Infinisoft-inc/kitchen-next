/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

export type AvatarUploadProps = {
  /**
   * Image URL
   */
  src?: string
  /**
   * Call back with base64 image
   */
  save?: (bse64: string) => void
}
