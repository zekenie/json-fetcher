# JSON Fetch

This is a micro-library for making http requests for JSON payloads. It wraps `fetch` with sensible defaults.

You can use it in the browser or in node.

```js
const jsonFetcher = require('json-fetch');

// simple get request
jsonFetcher.get('http://yourapi.co/api/stuff')
  .then(docs => console.log(docs));

// with query string
jsonFetcher.get('...', {
  query: {foo: 'bar'}
})

// will serialize query string for you and put it in url. handles nested objects great


// you can send body payloads too
jsonFetcher.post('...', {
  body: { foo: { bar: 'baz' } }
});
```

## Configuration

Sometimes you want to make tons of requests with some of the same headers. If you want to do that, just use our config method

```js
jsonFetcher.config({
  headers: {
    Authorization: 'xxxxxx'
  }
});
```

The object you pass to config gets merged with our defaults.

## Why?

Lots of libraries ship with nice http interfaces. But when you're working outside of a library your options get worse. There's [Axios](https://github.com/mzabriskie/axios), which is awesome, but its quite a bit bigger and build on top of the XMLHttpRequest. This is built on `fetch` (with a node polyfill).

## Why use this instead of just `fetch`

This sets up reasonable headers for working with JSON, parses your HTTP bodies into JSON, parses the response into JSON, serializes your query string... stuff you don't want to do over and over again.