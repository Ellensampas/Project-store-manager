const { expect } = require("chai");
const sinon = require("sinon");
const connection = require("../../../src/models/connection");
const productsModel = require("../../../src/models/products.model");
const mock = require("../productsMock");

describe("Testes de unidade do model de produtos", function () {
  describe('Teste de products da camada model', function () {
    it("Lista todos os produtos", async function () {
      // Arrange
      sinon.stub(connection, "execute").resolves([mock]);
      // Act
      const result = await productsModel.findAll();
      // Assert
      expect(result).to.be.deep.equal(mock);
    });
    it("Retorna o produto pelo id", async function () {
      // Arrange
      sinon.stub(connection, 'execute').resolves([[mock[0]]]);
      // Act
      const result = await productsModel.findById(1);
      // Assert
      expect(result).to.be.deep.equal(mock[0]);
    });
  });
  afterEach(function () {
    sinon.restore();
  });
});
