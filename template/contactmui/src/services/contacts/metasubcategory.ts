import config from '@/config/config.json';


export type metasubcategoryParams = {
  /** Current page */
  current?: number;
  /** Items per page */
  pageSize?: number;
  /** Sort by */
  SK?: string;
  /** Filter by subcategory */
  subcategory?: string;
};

/** Meta subcategory with count GET /api/Meta/subcategory */
export async function metasubcategory(
  params: metasubcategoryParams,
  options?: { [key: string]: any },
) {
  const response = await  fetch(`${config.api}/api/Meta/subcategory`, {
    method: 'GET',

    ...params,

    ...(options || {}),
  });
  return response.json()
}
