const extractMatchingCars = (obj) => {
  let keys = Object.keys(obj);
  return keys.map((idx) => {
    if (!idx==="searchParams") {
      return obj[idx];
    }
  });
};
window.extractMatchingCars = extractMatchingCars;
export {extractMatchingCars};
