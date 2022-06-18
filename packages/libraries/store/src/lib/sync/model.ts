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

class StoreIDB<E, S, P> {
  private _db?: IDBDatabase;
  private _initDb:IDBOpenDBRequest;

  constructor() {
    //@ts-ignore
    window.indexedDB = window?.indexedDB || window?.mozIndexedDB || window?.webkitIndexedDB || window?.msIndexedDB;
    //@ts-ignore
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    //@ts-ignore
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    this._initDb= window.indexedDB.open("Infinistore", 4);

    // Gecko-only IndexedDB temp storage option:
    // var request = window.indexedDB.open("toDoList", {version: 4, storage: "temporary"});
    this._initDb.onerror

  }
  private _setDb = (db: IDBDatabase) => {
    this._db = db;
  }

    // these two event handlers act on the database being opened successfully, or not
    private onError = (event:any) => {
      console.error(event)
    };

    private onsuccess = (event:any) => {
      console.log(event)

       //DBOpenRequest.result;
    }

  public EventHandler = (event: E, state: S, payload: P) => {
  }

  public init = () => {

    //@ts-ignore
    window.indexedDB = window?.indexedDB || window?.mozIndexedDB || window?.webkitIndexedDB || window?.msIndexedDB;
    //@ts-ignore
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    //@ts-ignore
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    const DBOpenRequest = window.indexedDB.open("Infinistore", 4);
    let db: IDBDatabase;

    // Gecko-only IndexedDB temp storage option:
    // var request = window.indexedDB.open("toDoList", {version: 4, storage: "temporary"});

    // these two event handlers act on the database being opened successfully, or not
    DBOpenRequest.onerror = function (event) {
      console.error(event)
    };

    DBOpenRequest.onsuccess = function (event) {
      console.log(event)

      this._db = DBOpenRequest.result;
    };

  }

}
