const objToArray = (obj) => {
  let keys = Object.keys(obj);
  return keys.map((idx) => {
    return obj[idx];
  });
};
window.objToArray = objToArray;
export {objToArray};
