let { services, f1, f2, f3, fetchDog } = require('./service');

describe('teste se o teste funciona', () => {
  services = jest.fn();
  f1 = jest.fn();
  f2 = jest.fn();
  f3 = jest.fn();
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

  // 04
  it('Desenvolva uma nova implementação para a primeira função: agora ela deve retornar a string em caixa baixa.', () => {
    f1.mockImplementation(a => a.toLowerCase());
    expect(f1('TONICO')).toEqual('tonico');
    expect(f1).toHaveBeenCalledWith('TONICO');
  });

  // 04
  it('Defina, para a segunda função, uma nova implementação: ela deve retornar a última letra de uma string.', () => {
    f2.mockImplementation(a => a.charAt(a.length - 1));
    expect(f2('tonico')).toEqual('o');
    expect(f2).toHaveBeenCalledWith('tonico');
  });

  // 04
  it('Implemente, na terceira função: ela deve receber três strings e concatená-las.', () => {
    f3.mockImplementation((a, b, c) => a.concat(b, c));
    expect(f3('to', 'ni', 'co')).toEqual('tonico');
    expect(f3).toHaveBeenCalledWith('to', 'ni', 'co');
  });

  // 04
  it('Faça o teste necessário para garantir que a implementação da função foi restaurado', () => {
    f1.mockReset();
    f1.mockImplementation(a => a.toUpperCase());
    expect(f1('tonico')).toEqual('TONICO');
  });

  //05
  // it('Faça o teste necessário para garantir que a implementação da função foi restaurado', () => {
  //   f1.mockReset();
  //   f1.mockImplementation(a => a.toUpperCase());
  //   expect(f1('tonico')).toEqual('TONICO');
  // });
});
