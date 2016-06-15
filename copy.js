const copy = module.exports = obj => {
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

