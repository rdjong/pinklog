# pinklog

Pinklog is a simple pink console logger.



[![](https://img.shields.io/badge/rick-approved-ff69b4.svg)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

Installation
------------

```shell
npm install pinklog --save
```


Usage
-----

```js
const pl = require('pinklog')
```

#### log( message )

```js
pl.log('Hello World')
```

#### ok( message )

```js
pl.ok('Request received')
```

#### err( message )

```js
pl.err('Internal server error')
```

#### ob( jsonObject )

```js
pl.ob(object)
```

#### if( boolean, message )

```js
pl.if(true, 'This message is colored green')
pl.if(1, 'This message is also colored green')

pl.if(false, 'This message is colored red')
pl.if(0, 'This message is also colored red')

pl.if('not a bool', 'This message is colored blue')
```