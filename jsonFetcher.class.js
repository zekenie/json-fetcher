import { qs } from 'qs';
const copy = (obj) => {
  if (null == obj || "object" != typeof obj) { return obj; }

  const newObj = obj.constructor();

  Object.keys(obj).forEach(key => {
    if(obj instanceof Object) {
      newObj[key] = copy(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  });
  return newObj;
}

export { copy };

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
  try {
    return JSON.stringify(body);
  } catch(e) {}
}

const parseQuery = query => {
  if(typeof query === 'string') {
    return query;
  }
  return qs.stringify(options.query);
}

export class JsonFetcher {
  constructor(config={}) {
    this.defaults = Object.assign(config, defaults);
  }


  request(url, options={}) {
    options = Object.assign(copy(this.defaults), options);

    if(!!options.body) {
      options.body = parseBody(options.body);
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