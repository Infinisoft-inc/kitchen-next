/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

export type ContactDetailProps = {
  /**
   * Title
   */
  title: React.ReactNode
  /**
   * Content
   */
  content: React.ReactNode
  /**
   * Icon
   */
  icon: React.ReactNode
  /**
   * Style classname
   */
  className?: string
  /**
   * Editable field name
   */
  editableFieldName?: string
  /**
   * onChange event callback
   */
  onChange?: false | {onChange: (val: string) => void}
};
