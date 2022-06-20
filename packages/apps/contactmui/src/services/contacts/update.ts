import config from '@/config/config.json';

export async function update(body:  API.Itemv2, options?: { [key: string]: any }) {
  const response = await fetch(`${config.api}/api/contacts`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
    ...(options || {}),
  });
  return response.json()
}
