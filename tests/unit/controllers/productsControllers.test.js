const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const productsService = require('../../../src/services/products.service');
const productsController = require('../../../src/controllers/products.controller');
const mocks = require('../productsMock');

describe("Testes de unidade do controller de produtos", function () {
  describe('Testes de products na camada controller', function () {
    beforeEach(function () {
    
    })
    it("Lista todos os produtos", async function () {
      const res = {};
      const req = {};

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon.stub(productsService, 'findAll').resolves(mocks);
      // Act
      await productsController.listAllProducts(req, res);
      // Assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mocks);
    });
    it("Retorna o produto pelo ID buscado", async function () {
      const res = {};
      const req = {
        params: { id: 1},
      };

      res.status = sinon.stub().returns(res);
      res.json = sinon.stub().returns();
      sinon
        .stub(productsService, 'findById')
        .resolves(mocks);
      // Act
      await productsController.getProductsId(req, res);
      // Assert
      expect(res.status).to.have.been.calledWith(200);
      expect(res.json).to.have.been.calledWith(mocks);
    });
  });
  afterEach(function () {
    sinon.restore();
  });
});
