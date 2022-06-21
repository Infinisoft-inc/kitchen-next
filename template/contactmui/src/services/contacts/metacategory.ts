import config from '@/config/config.json';

export type metacategoryParams = {
  /** Current page */
  current?: number;
  /** Items per page */
  pageSize?: number;
  /** Sort by */
  SK?: string;
  /** Filter by subcategory */
  subcategory?: string;
};

/** Meta category with count GET /api/Meta/category */
export async function metacategory(
  params: metacategoryParams,
  options?: { [key: string]: any },
) {
  const response = await  fetch(`${config.api}/api/Meta/category`, {
    method: 'GET',

      ...params,
   ...(options || {}),
  });
  return response.json()
}
