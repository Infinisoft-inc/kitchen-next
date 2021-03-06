/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * this is a JSON SChema test for typescript conversion
 */
export interface Schema {
  name: Name;
  list?: Address[];
  intersectionNameAddress?: Address & Name;
  unionNameAddress: Address | Name;
  oneNameAddress?: {
    [k: string]: unknown;
  };
}
export interface Name {
  props1: string;
  props2?: string;
  country?: "United States of America";
  [k: string]: unknown;
}
export interface Address {
  phone?: number;
  house?: string;
  street?: "Street" | "Avenue" | "Boulevard";
  orientation?: "NW" | "NE" | "SW" | "SE";
  [k: string]: unknown;
}
