function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item) && item !== null);
}

const merge = module.exports = (obj1, obj2) => {
  if(isObject(obj1) && isObject(obj2)) {
    Object.keys(obj2)
      .forEach(key => {
        if(isObject(obj2[key])) {
          if(!obj1[key]) {
            obj1[key] = {};
          }
          merge(obj1[key], obj2[key]);
        } else {
          obj1[key] = obj2[key];          
        }
      });
      return obj1;
  } else {
    return obj1;
  }
}