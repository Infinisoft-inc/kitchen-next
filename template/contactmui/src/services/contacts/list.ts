import config from '@/config/config.json';
import type { Item, List } from '@/models';
import { metacategory } from './metacategory';
import { metasubcategory } from './metasubcategory';


export type listParams = {
  /** Current page */
  current?: number;
  /** Items per page */
  pageSize?: number;
  /** Search term */
  search?: string;
  /** Sort by */
  sort?: 'date' | 'category' | 'rating';
  /** Sort by category */
  category?: string;
  /** Filter by subcategory */
  subcategory?: string;
};

export async function list<T>(
  params?: T,
  options?: { [key: string]: any },
) {
  const response = await (await fetch(`${config.api}/api/contacts`, {
    method: 'GET',
    ...params,
    ...(options || {}),
  })).json() as List

  if (response.success) {
    const normalized: Record<string,  Item> = response?.data?.reduce((acc: Record<string,  Item>, item) => {
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
