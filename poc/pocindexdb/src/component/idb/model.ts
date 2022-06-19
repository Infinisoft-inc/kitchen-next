export class StoreIDB<E, S, P> {
  private _db?: IDBDatabase;
  private _store?: IDBObjectStore;
  private _initDb: IDBOpenDBRequest;

  constructor() {
    //@ts-ignore
    // window.indexedDB = window?.indexedDB || window?.mozIndexedDB || window?.webkitIndexedDB || window?.msIndexedDB;
    //@ts-ignore
    // window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
    //@ts-ignore
    // window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

    if (!window.indexedDB) {
      throw new DOMException('IndexDB Not Supported!')
    }

    this._initDb = window.indexedDB.open("Infinistore",2);

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
    console.log(`onupgradeneeded`)
    console.log(event)

    this._db = event.target.result;

    // Create another object store called "names" with the autoIncrement flag set as true.
    this._store = this?._db?.createObjectStore("names", { autoIncrement: true });

    this._store?.add('names')
    this._store?.createIndex('name', 'name', { unique: false })
  }

  // public eventHandler = (event: E, state: S, payload: P) => {
  //   console.log("StoreIDB Event Handler ", event, state, payload)
  // }

  public search = (name: string) => {
    var index = this?._db?.transaction(["names"], "readwrite").objectStore("names").index("name");
    var singleKeyRange = IDBKeyRange.only("bitchz")

    var cursor = index?.openCursor(singleKeyRange)

    if (cursor) {
      cursor.onsuccess = (event: any) => {
        console.log(event?.target?.result);
        var _result = event.target.result;
        if (_result) {
          // Do something with the matches.
          console.log(`key = `, _result.key)
          console.log(`primaryKey = `, _result.primaryKey)
          console.log(`value = `, _result.value)
          _result.continue();
        }
      }
    }
  }

  public index = (name: string) => {
    var index = this?._db?.transaction(["names"], "readwrite").objectStore("names").index("name");

    var r = index?.get("bitchz")

    if (r) {
      r.onsuccess = (event: any) => {
        console.log(event?.target?.result);
      }
    }
  }

  public create = (name: string) => {
    const request = this?._db?.transaction(["names"], "readwrite").objectStore("names").add({ name, dog: 'ette' })

    if (request) {
      request.onsuccess = (e: any) => {
        console.log(`Create = `, e)
        console.log(`key = `, e.target.result)
      }
    }
  }

  public read = (key: IDBValidKey) => {
    const request = this?._db?.transaction(["names"], "readwrite").objectStore("names").get(key)

    if (request) {
      request.onsuccess = (e: any) => {
        console.log(`read = `, e)
        console.log(`record = `, e.target.result)
      }
    }
  }

  public update = (key: IDBValidKey, value: any) => {
    const request = this?._db?.transaction(["names"], "readwrite").objectStore("names").put(value, key)

    if (request) {
      request.onsuccess = (e: any) => {
        console.log(`Update = `, e)
        console.log(`? = `, e.target.result)
      }
    }
  }

  public remove = (key: IDBValidKey) => {
    const request = this?._db?.transaction(["names"], "readwrite").objectStore("names").delete(key)

    if (request) {
      request.onsuccess = (e: any) => {
        console.log(`removed = `, e)
        console.log(`? = `, e.target.result)
      }
    }
  }


}
