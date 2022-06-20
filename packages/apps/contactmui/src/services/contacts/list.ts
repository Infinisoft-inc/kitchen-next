import config from '@/config/config.json';
import { metacategory } from './metacategory';
import { metasubcategory } from './metasubcategory';

export async function list<T>(
  params?: T,
  options?: { [key: string]: any },
) {
  const response = await (await fetch(`${config.api}/api/contacts`, {
    method: 'GET',
    ...params,
    ...(options || {}),
  })).json() as API.List

  if (response.success) {
    const normalized: Record<string,  API.Itemv2> = response?.data?.reduce((acc: Record<string,  API.Itemv2>, item) => {
      const Categories = item.SK.split('__')[0]
      const id = item.SK.split('__')[1]

      if (id) {
        return { ...acc, [id]: { ...item, id, Categories } }
      }

      return acc;

    }, {})

    return {
      list: normalized,
      editItemId: '',
      meta: {
        categories: (await metacategory({ SK: `${config.appName}__` })),
        subCategories: (await metasubcategory({ SK: `${config.appName}__` }))
      }
    }
  }

  throw new DOMException(`ListError`)
}
