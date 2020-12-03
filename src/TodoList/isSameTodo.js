const isSameObject = (objectOne, objectTwo) => {
  return Object.is(objectOne, objectTwo);
}

export { isSameObject };