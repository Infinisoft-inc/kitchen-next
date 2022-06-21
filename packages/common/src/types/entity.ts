/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

export type Entity = {
  /** uuid*/
  id: string;
  /** Optional ID. Can be used by front-end to identify new items. */
  tempID?: string;

  SK?: string;

  /** Creation date in ISO 8601 format */
  createdAt: string;
  /** Last updated date in ISO 8601 format */
  updatedAt: string;
  /** Relation in the graph */
  relatedWith?: string[];

  /** Categories  */
  Categories?: string;
  /** SubCategory - Global Secondary Index */
  Subcategory?: string;

  /** Item is enabled or disabled */
  enabled?: boolean;

  /** Item creator userid */
  USERID?: string;
  /** Item creator name */
  NAME?: string;
  /** Item creator email */
  EMAIL?: string;
  /** Item creator picture url */
  PICTURE?: string;

};
