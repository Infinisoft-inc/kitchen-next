# Getting started

## 🤝🏽 Extended Promises

Extends promises with following features. We use it to help increase UX. Deffered promise combined with async components helps smooth UI transitions and avoid flicker. Timeout increase error and flow control.

## ✨ Features
- No dependency
- Timeout
- Deffered
- Debounce
- Timeout Debounce simultaneously
- Helpers
- Typescript
- Javascript

## 📚 Documentation

> Get all documentations, examples and execute it directly from our website, the ☕ kitchen! Come cook software :) [https://www.kitchen.infini-soft.com/](https://www.kitchen.infini-soft.com/)

<br>

## 📦 Install

```bash
$ npm install @infini-soft/promises --save
# or
$ yarn add @infini-soft/promises
```

## 🔨 Usage

### Timeout

Expected result is to timeout and reject

> Timeout is 2000ms  
> Promise NEVER fullfills (Scenario where a request or Internet is lost)

```tsx
import React from 'react';
import {
  factoryPromiseFuncNeverResolve,
  promiseTimeout,
} from '@infini-soft/promises';

const test = async () => {
  const start = new Date().getTime();
  try {
    await promiseTimeout({
      request: factoryPromiseFuncNeverResolve,
      timeout: 2000,
    });
  } catch (error) {
    alert(`${error} after ${new Date().getTime() - start} ms`);
  }
};

export default () => (
  <>
    <h3>Timeout 2000 ms</h3>
    <button onClick={() => test()}>Test</button>
  </>
);
```

### Deffered

Expected result is to be completed in ~2000ms.

> Deffered is default 2000ms  
> Promise is resolved in 50ms

```tsx
import React from 'react';
import {
  factoryPromiseFuncResolveIn,
  promiseDeffered,
} from '@infini-soft/promises';

const test = async () => {
  try {
    const start = new Date().getTime();
    await promiseDeffered({
      request: factoryPromiseFuncResolveIn(50),
      deffered: 2000,
    });
    alert(`Request success deffered after ${new Date().getTime() - start} ms`);
  } catch (error) {
    alert(error);
  }
};

export default () => (
  <>
    <h3>Success 2000 ms</h3>
    <button onClick={() => test()}>Test</button>
  </>
);
```

### Timeout and Deffered

Expected result is to be completed in ~2000ms.

> Timeout is default 2000ms  
> Deffered is default 2000ms  
> Promise is resolved in 50ms (Timeout is NOT reached)

```tsx
import React from 'react';
import {
  factoryPromiseFuncResolveIn,
  promiseTimeOutDeffered,
} from '@infini-soft/promises';

const test = async () => {
  try {
    const start = new Date().getTime();
    await promiseTimeOutDeffered({
      request: factoryPromiseFuncResolveIn(50),
      Deffered: 2000,
    });
    alert(`Request success deffered after ${new Date().getTime() - start} ms`);
  } catch (error) {
    alert(error);
  }
};

export default () => (
  <>
    <h3>Success in ~2000 ms</h3>

    <button onClick={() => test()}>Test</button>
  </>
);
```

## 🧠 States / Logic / Sequence Design

Introducing `Extended Promises`. Problem is the lack of timeout, deffere or debounce in context of front-end to smooth transitions and reduce boiler plate.

Covering all those states together can become cumbersome very quickly. Here is a diagram representing the extended promises.

![](https://infinicloudstorage215423-mart.s3.amazonaws.com/public/kitchen.infini-soft.com/assets/promises.design.png)
![](https://infinicloudstorage215423-mart.s3.amazonaws.com/public/kitchen.infini-soft.com/assets/promises.legend.png)

## 🧪 Unit Tested

![](https://infinicloudstorage215423-mart.s3.amazonaws.com/public/kitchen.infini-soft.com/assets/promise.unit.tests.png)

---

Powered 🚀 by [Infinisoft Inc.](https://www.infini-soft.com)
<br/>
Wanna cook software? come in the kitchen [https://www.kitchen.infini-soft.com]
