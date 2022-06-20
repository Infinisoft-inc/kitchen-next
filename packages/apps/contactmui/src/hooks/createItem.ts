import { MicroStore } from "@/context/micro";

const generateId = () => {
  return new Date().getTime().toFixed(0);
};

export const createItem = (store: MicroStore) => new Promise<string>((res) => {
  const tempID = generateId();

  store.mutate(prev => ({
    ...prev,
    editItemId: tempID,
    list: {
      [tempID]: {
        id: tempID,
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
