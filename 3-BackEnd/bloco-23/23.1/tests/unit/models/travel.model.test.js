const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const travelModel = require('../../../src/models/travel.model');

const { travels } = require('./mocks/travel.model.mock');

describe('Testes de unidade do model de viagens', function () {
  it('Realizando uma operação INSERT com o model travel', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 42 }]);

    const result = await travelModel.insert(travels[0]);

    expect(result).to.equal(42);
  });

  afterEach(sinon.restore);
});