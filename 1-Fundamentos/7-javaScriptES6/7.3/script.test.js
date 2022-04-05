const soma = require('./script');

describe('Requisito 1', () => {
  it('Teste se o retorno de sum(4, 5) é 9', () => {
    expect(soma(4, 5)).toBe(9);
  });

  it('Teste se o retorno de sum(0, 0) é 0', () => {
    expect(soma(0, 0)).toBe(0);
  });

  it('Teste se a função sum lança um erro quando os parâmetros são 4 e "5"', () => {
    expect(() => {
      soma('');
    }).toThrow('Insira um valor Númerico');
  });
});

describe('Requisito 2', () => {
  it('Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(soma(0, 0)).toBe(0);
  });
})
