function updateObjectWithKeyAndValue(object, key, value) {
  var copyObj = Object.assing({}, object);
  object[key] = value;
  return object;
}
