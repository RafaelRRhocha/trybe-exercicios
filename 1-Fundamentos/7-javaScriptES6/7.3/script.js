function sum(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error('Insira um valor Númerico');
  }
  
  return a + b
};

module.exports = sum;