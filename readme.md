# JSON Fetch

This is a micro-library for making http requests for JSON payloads. It wraps `fetch` with sensible defaults.

You can use it in the browser or in node.

```js
const JsonFetcher = require('json-fetcher').JsonFetcher;

const requestManager = new JsonFetcher();

// simple get request
requestManager.get('http://yourapi.co/api/stuff')
  .then(docs => console.log(docs));

// with query string
requestManager.get('...', {
  query: {foo: 'bar'}
})

// will serialize query string for you and put it in url. handles nested objects great


// you can send body payloads too
requestManager.post('...', {
  body: { foo: { bar: 'baz' } }
});
```

## Configuration

Sometimes you want to make tons of requests with some of the same headers. If you want to do that, just use our config method

```js
requestManager.config({
  headers: {
    Authorization: 'xxxxxx'
  }
});
```

The object you pass to config gets merged with our defaults.

## Why?

Lots of libraries ship with nice http interfaces. But when you're working outside of a library your options get worse. There's [Axios](https://github.com/mzabriskie/axios), which is awesome, but its quite a bit bigger and build on top of the XMLHttpRequest. This is built on `fetch`. **One important note is that the library is BYOF (bring your own fetch). If you use it in node, you need to have `fetch` defined globally. There are several packages that do this.**

## Why use this instead of just `fetch`

This sets up reasonable headers for working with JSON, parses your HTTP bodies into JSON, parses the response into JSON, serializes your query string... stuff you don't want to do over and over again.

It also gives you space to be able to set up defaults and remember them. Let's say you're working with two APIs and need to remember two sets of auth headers. You can just make two instances of `JsonFetcher`.