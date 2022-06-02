let { services } = require('./service');

describe('teste se o teste funciona', () => {
  services = jest.fn();
  // 01
  it('testando se a função foi chamada', () => {
    services.mockReturnValue(3);

    expect(services()).toEqual(3);
  });

  // 02
  it('Teste se a função foi chamada e a nova implementação de divisão foi aplicada.', () => {
    services.mockImplementationOnce((a, b) => a / b);

    expect(services(20, 2)).toEqual(10);
    expect(services).toHaveBeenCalled();
    expect(services(20, 2)).not.toEqual(10);
  });

  // 03
  it('Utilize o mock e desenvolva uma nova implementação que receba três parâmetros', () => {
    services.mockImplementation((a, b, c) => a * b * c);

    expect(services(20, 2, 2)).toEqual(80);
    expect(services).toHaveBeenCalledWith(20, 2, 2);
    expect(services).toHaveBeenCalled();
  });

  // 03
  it('Resete sua implementação e crie uma nova, que receba apenas um parâmetro e retorne o dobro.', () => {
    services.mockReset();
    services.mockImplementation((a) => a * 5);

    expect(services(10)).toEqual(50);
    expect(services).toHaveBeenCalled();
  });
});
