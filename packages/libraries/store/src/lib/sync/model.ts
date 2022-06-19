const model = {
  SK: {
    createAt: '',
    status: "",//processing ,complete, failed
    meta: {
      event: 'item.clicked',// with this event and the data, its possible to dispatch event with payload so user get back at screen its thing
    },
    data: {}
  }
}

export class StoreIDB<E, S, P> {
  private _db?: IDBDatabase;
  private _initDb: IDBOpenDBRequest;

  constructor() {
    //@ts-ignore
    window.indexedDB = window?.indexedDB || window?.mozIndexedDB || window?.webkitIndexedDB || window?.msIndexedDB;
    //@ts-ignore
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    //@ts-ignore
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    if (!window.indexedDB) {
      throw new DOMException('IndexDB Not Supported!')
    }

    this._initDb = window.indexedDB.open("Infinistore", 4);

    this._initDb.onerror = this.onError;
    this._initDb.onsuccess = this.onsuccess;
    this._initDb.onupgradeneeded = this.onupgradeneeded;

  }

  // these two event handlers act on the database being opened successfully, or not
  private onError = (event: any) => {
    console.error(event)
  };

  private onsuccess = (event: any) => {
    console.log(event)

    this._db = this._initDb.result;
  }

  private onupgradeneeded = (event: any) => {
    console.log(event)
  }

  public eventHandler = (event: E, state: S, payload: P) => {
    console.log("StoreIDB Event Handler ", event, state, payload)
  }

}
