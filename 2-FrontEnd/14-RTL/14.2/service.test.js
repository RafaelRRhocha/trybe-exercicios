let { services } = require('./service');

describe('teste se o teste funciona', () => {
  it('testando se a função foi chamada', () => {
    services = jest.fn().mockReturnValue(3);

    expect(services()).toEqual(3);
  });

  it('Teste se a função foi chamada e a nova implementação de divisão foi aplicada.', () => {
    services = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(services(20, 2)).toEqual(10);
    expect(services).toHaveBeenCalled();
    expect(services(20, 2)).not.toEqual(10);
  });
});
