import { MicroStore } from "@/context/micro";
import { generateId } from "./generateId";

export const createItem = (store: MicroStore) => new Promise<string>((res) => {
  const tempID = generateId();

  store.mutate(prev => ({
    ...prev,
    editItemId: tempID,
    list: {
      [tempID]: {
        id: tempID,
        name: '',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tempID,
        telephones: [],
        relatedWith: []
      },
      ...prev?.list,
    }
  }));

  res(tempID)
})
