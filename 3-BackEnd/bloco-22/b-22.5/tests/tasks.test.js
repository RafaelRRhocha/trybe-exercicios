const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');

const app = require('../src/app');
const connection = require('../src/db/connection');

const { expect, use } = chai;

use(chaiHttp);

describe('Testando os endpoints de tasks', function () {
  it('Testando o cadastro de uma tarefa ', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    const response = await chai
      .request(app)
      .post('/tasks')
      .send(
        {
          nome: 'Ibis Futebol Clube',
          sigla: 'IBI',
        },
      );

    expect(response.status).to.equal(201);
    expect(response.body).to.
      deep.equal({ message: 'Tarefa cadastrada com sucesso com o id 42' });
  });

  afterEach(sinon.restore);
});