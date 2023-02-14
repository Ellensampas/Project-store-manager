const { expect } = require("chai");
const sinon = require("sinon");
const connection = require("../../../src/models/connection");
const productsModel = require("../../../src/models/products.model");
const {products, newProducts}= require("../productsMock");

describe("Testes de unidade do model de produtos", function () {
  describe('Teste de products da camada model', function () {
    it("Lista todos os produtos", async function () {
      // Arrange
      sinon.stub(connection, "execute").resolves([products]);
      // Act
      const result = await productsModel.findAll();
      // Assert
      expect(result).to.be.deep.equal(products);
    });
    it("Retorna o produto pelo id", async function () {
      // Arrange
      sinon.stub(connection, 'execute').resolves([[products[0]]]);
      // Act
      const result = await productsModel.findById(1);
      // Assert
      expect(result).to.be.deep.equal(products[0]);
    });
    it("Insere outro produto", async function () {
      // Arrange
      sinon.stub(connection, "execute").resolves([{ insertId: 4 }]);
      // Act
      const result = await productsModel.insert(newProducts);
      // Assert
      expect(result).to.be.deep.equal(4);
    });
  });
  afterEach(function () {
    sinon.restore();
  });
});
