let { services } = require('./service');

describe('teste se o teste funciona', () => {
  services = jest.fn().mockReturnValue(3);
  services();
  it('testando se a função foi chamada', () => {
    expect(services()).toEqual(3);
  });

  it('Teste se a função foi chamada e a nova implementação de divisão foi aplicada.', () => {
    expect(services).toHaveBeenCalled();
  });
});
