const intersectionIndexes = (compareItemsFn, length1, length2) => {
  const result = [];
  let i = 0;
  let j = 0;

  while (i < length1 && j < length2) {
    const comparison = compareItemsFn(i, j);
    if (comparison === 0) {
      result.push(i);
      i++;
      j++;
    } else if (comparison < 0) {
      i++;
    } else {
      j++;
    }
  }

  return result;
};

const arr1 = [1, 2, 2, 3, 4, 5, 6, 7, 9, 9, 20];
const arr2 = [1, 2, 3, 3, 5, 8, 9, 9, 21];

const compareItemsFn = (index1, index2) => {
  switch (true) {
    case arr1[index1] === arr2[index2]:
      return 0;
    case arr1[index1] < arr2[index2]:
      return -1;
    case arr1[index1] > arr2[index2]:
      return 1;
    default:
      return undefined;
  }
};
const length1 = arr1.length;
const length2 = arr2.length;

const result = intersectionIndexes(compareItemsFn, length1, length2);
console.log(result); // acceptable results: [0, 1, 3, 5, 8, 9]
