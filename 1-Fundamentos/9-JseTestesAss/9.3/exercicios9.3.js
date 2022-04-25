const pegarCep = document.querySelector('cep');
const pegarRua = document.querySelector('rua');
const pegarBairro = document.querySelector('bairro');
const pegarCidade = document.querySelector('cidade');

const buildUrl = () => `http://cep.la/${pegarCep}`

const encontrarCep = async (cep) => {
  const requests = {
    headers: {"Accept": "application/json"},
  }

  const response = await fetch(buildUrl(cep), requests);
  const cepInfo = await response.json();

  return pegarRua.value = cepInfo.logradouro
}
encontrarCep()