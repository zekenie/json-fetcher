const qs = require('qs');
require('isomorphic-fetch');

const defaults = {
  credentials: 'same-origin',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
};

const jsonFetcher = (url, options={}) => {
  options = Object.assign(defaults, options);

  if(!!options.body && typeof options.body !== 'string') {
    options.body = JSON.stringify(options.body);
  }

  if(options.query) {
    options.query = qs.stringify(options.query);
    url += '?' + options.query;
  }

  return fetch(url,options)
    .then(res => res.json());
};

exports.config = overrides => {
  Object.assign(defaults, overrides);
};

['head', 'options', 'connect', 'get', 'post', 'put', 'delete'].reduce((exports, method) => {
  exports[method] = (url, options={}) => {
    options.method = method.toUpperCase();
    return jsonFetcher(url, options);
  }
  return exports;
}, exports);