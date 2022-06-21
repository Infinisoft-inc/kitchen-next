# Getting started



# useEvent
```ts
/**
 *  Subscribe to event and unsubscribe
 * @param name      Event name
 * @param handler   Event handler
 */
export const useEvent = (
  name: string,
  handler: (e: Event) => void
) => void
```

# useSearchFilter()

```ts
/**
 * Search/Filter store list
 * @returns filtered store list
 */
export const useSearchFilter = <T = MicroState>({
  source,
  _selector,
}: UseSearchFilterProps<T>) => unknown;
```


---
Powered 🚀 by [Infinisoft Inc.](https://www.infini-soft.com)
<br>
Wanna cook the future? Come in the kitchen [https://www.kitchen.infini-soft.com]
