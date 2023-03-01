# vi-canvas-mock

This is a fork of [jest-canvas-mock](https://github.com/hustcc/jest-canvas-mock) replacing the use of Jest to Vitest to have a zero Jest dependancy canvas mock.
The code and the mock was develop by @hustcc i simpli replace jest with vi.

Thanks for the work @hustcc <3

## Install

```sh 
yarn add -D vi-canvas-mock
```  
or  
```sh
npm i --save-dev vi-canvas-mock
```

## Usage
Simple import at you `vitest.setup` as

```js
import 'vi-canvas-mock';
```

IF you don't have a `vitest.setup` file take a look at [Vitest docs](https://vitest.dev/config/#setupfiles)
