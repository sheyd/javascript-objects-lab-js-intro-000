function updateObjectWithKeyAndValue(object, key, value) {
  var copyObj = Object.assign({}, object);
  object[key] = value;
  return object;
}
