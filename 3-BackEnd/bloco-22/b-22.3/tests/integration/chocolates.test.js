const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;

describe('testes em chai', () => {
  it('retorne a lista de chocolates', async () => {
    const response = await chai.request(app).get('/chocolates');
    expect(response.status).to.be.equal(200);
  });
});