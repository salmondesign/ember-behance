var memoize = function(func) {
  var memoize = function(key) {
    var cache = memoize.cache;
    if (!cache.hasOwnProperty(key)) {
      cache[key] = func.apply(this, arguments);
    }
    return cache[key];
  };
  memoize.cache = {};
  return memoize;
};

export default memoize;
