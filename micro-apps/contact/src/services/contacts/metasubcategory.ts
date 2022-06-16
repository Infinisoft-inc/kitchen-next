import config from '@/config/config.json';
/** Meta subcategory with count GET /api/Meta/subcategory */
export async function metasubcategory(
  params: API.metasubcategoryParams,
  options?: { [key: string]: any },
) {
  const response = await  fetch(`${config.api}/api/Meta/subcategory`, {
    method: 'GET',

    ...params,

    ...(options || {}),
  });
  return response.json()
}
