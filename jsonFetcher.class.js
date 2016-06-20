// import { qs } from 'qs';
const qs = require('qs');
const copy = require('./copy');
const merge = require('./merge')

const defaults = {
  credentials: 'same-origin',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

const parseBody = body => {
  if(!typeof body === 'string') {
    return body;
  }
  return JSON.stringify(body);
}

const parseQuery = query => {
  if(typeof query === 'string') {
    return query;
  }
  return qs.stringify(query);
}

class JsonFetcher {
  constructor(config={}) {
    this.defaults = Object.assign(config, defaults);
  }

  config(obj) {

    // this needs to merge recursively, and it isn't
    merge(this.defaults, obj);
  }

  request(url, options={}) {
    options = Object.assign(copy(this.defaults), options);

    if(!!options.body) {
      try {
        options.body = parseBody(options.body);
      } catch (e) {
        return Promise.reject(e);
      }
    }

    if(options.query) {
      options.query = parseQuery(options.query);
      url += '?' + options.query;
    }

    return fetch(url,options)
      .then(res => res.json());
  }
}

['head', 'options', 'connect', 'get', 'post', 'put', 'delete']
.reduce(function(prototype, method) {
  prototype[method] = function(url, options={}) {
    options.method = method.toUpperCase();
    return this.request(url, options);
  }
  return prototype;
}, JsonFetcher.prototype);

exports.JsonFetcher = JsonFetcher;