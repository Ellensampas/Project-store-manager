const { expect } = require("chai");
const sinon = require("sinon");

const productsModel = require("../../../src/models/products.model");
const productsService = require("../../../src/services/products.service");
const { products, umId, newProducts} = require("../productsMock");

describe("Testes unitarios de services de products", function () {
  describe("Testes de products da camada services", function () {
    it("Lista todos os produtos", async function () {
      // Arrange
      sinon.stub(productsModel, "findAll").resolves(products);
      // Act
      const result = await productsService.findAll();
      // Assert
      expect(result).to.be.deep.equal(products);
    });
    it("Retorna o produto pelo ID", async function () {
      // Arrange
      sinon.stub(productsModel, "findById").resolves(umId);
      // Act
      const result = await productsService.findById(1);
      // Assert
      expect(result).to.be.deep.equal(umId);
    });
    it("Testa retorna um erro se não for encontrado produto com o id passado", async function () {
      sinon.stub(productsModel, "findById").resolves();
      const result = await productsService.findById(20);
      expect(result).to.be.deep.equal({ message: "Product not found" });
    });
  });

  afterEach(function () {
    sinon.restore();
  });
});
