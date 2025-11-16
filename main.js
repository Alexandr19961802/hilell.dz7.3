function removeElement(array, item) {
  return array.reduce((acc, el) => {
    if (el !== item) acc.push(el);
    return acc;
  }, []);
}
const array = [1, 3, 4, 6, 2, 5, 7];

const newArray = removeElement(array, 3);

console.log(newArray);
