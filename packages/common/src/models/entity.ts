/*
 * Copyright © All rights reserved 2022
 * Infinisoft Inc.
 * www.infini-soft.com
 */

export type Meta = {
  /** Categories  */
  Categories?: string;
  /** SubCategory - Global Secondary Index */
  Subcategory?: string;
  /** Relation in the graph */
  relatedWith?: string[];
}

export type Unique = {

  /** uuid*/
  id: string;
  /** Optional ID. Can be used by front-end to identify new items. */
  tempID?: string;

  /** Creation date in ISO 8601 format */
  createdAt: string;
  /** Last updated date in ISO 8601 format */
  updatedAt: string;

  /** MANAGE LATER  */
  SK?: string;

  /** Item is enabled or disabled */
  enabled?: boolean;

}

export type Timestamp = {
  /** Item creator userid */
  USERID?: string;
  /** Item creator name */
  NAME?: string;
  /** Item creator email */
  EMAIL?: string;
  /** Item creator picture url */
  PICTURE?: string;
}

export type Entity = Unique & Meta & Timestamp
