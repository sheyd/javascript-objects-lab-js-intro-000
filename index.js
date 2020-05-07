function updateObjectWithKeyAndValue(object, key, value) {
  var copyObj = Object.assign({}, object);
  copyObj[key] = value;
  return copyObj;
}
