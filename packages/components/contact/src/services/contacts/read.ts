import config from '@/config/config.json';
export async function read(
  params: API.readParams,
  options?: { [key: string]: any },
) {
  const { SK: param0, ...queryParams } = params;
  const response = await  fetch(`${config.api}/api/contacts/${param0}`, {
    method: 'GET',
    ...queryParams,
    ...(options || {}),
  });
  return response.json()
}
