const { expect } = require("chai");
const sinon = require("sinon");

const productsModel = require("../../../src/models/products.model");
const productsService = require("../../../src/services/products.service");
const mock = require("../productsMock");

describe("Testes unitarios de services de products", function () {
  describe("Testes de products da camada services", function () {
    it("Lista todos os produtos", async function () {
      // Arrange
      sinon.stub(productsModel, "findAll").resolves(mock);
      // Act
      const result = await productsService.findAll();
      // Assert
      expect(result).to.be.deep.equal(mock);
    });
    it("Retorna o produto pelo ID", async function () {
      // Arrange
      sinon.stub(productsModel, "findById").resolves(mock[0]);
      // Act
      const result = await productsService.findById(1);
      // Assert
      expect(result.menssage).to.be.deep.equal(mock[0]);
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
