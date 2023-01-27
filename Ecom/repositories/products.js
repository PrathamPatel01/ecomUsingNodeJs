const Repository = require("./repository");
// const productsRepo = require("../../repositories/products");

class ProductsRepository extends Repository {}

module.exports = new ProductsRepository("products.json");
