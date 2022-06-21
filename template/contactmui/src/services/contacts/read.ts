import config from '@/config/config.json';

export type readParams = {
  id: string;
};

export async function read(
  params: readParams,
  options?: { [key: string]: any },
) {
  const { id: param0, ...queryParams } = params;
  const response = await  fetch(`${config.api}/api/contacts/${param0}`, {
    method: 'GET',
    ...queryParams,
    ...(options || {}),
  });
  return response.json()
}
