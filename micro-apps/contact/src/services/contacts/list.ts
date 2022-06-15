import config from '../../../config/config.json';

export async function list<T>(
  params: T,
  options?: { [key: string]: any },
) {
  const response = await fetch(`${config.api}/api/contacts`, {
    method: 'GET',
    ...params,
    ...(options || {}),
  });

  return response.json()
}
