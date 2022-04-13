const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

const flatten = () =>
  arrays.reduce((accResult, array) => {
    array.forEach((arrayItem) => {
      accResult.push(arrayItem);
    });
    return accResult;
  }, []);
console.log(flatten());
