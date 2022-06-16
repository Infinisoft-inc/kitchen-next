import config from '../../../config/config.json';

/** Meta category with count GET /api/Meta/category */
export async function metacategory(
  params: API.metacategoryParams,
  options?: { [key: string]: any },
) {
  const response = await  fetch(`${config.api}/api/Meta/category`, {
    method: 'GET',

      ...params,
   ...(options || {}),
  });
  return response.json()
}
