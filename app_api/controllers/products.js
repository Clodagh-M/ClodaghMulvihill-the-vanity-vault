const mongoose = require('mongoose');
const Product = mongoose.model('Product');

const productsCreate = function (req, res) { 
res
.status(200)
.json({"status" : "success"});
};

const productsListByAlphabeticalOrder = function (req, res) { 
res
.status(200)
.json({"status" : "success"});
};

const productsReadAll = async function(req, res) {
  try {
    const product = await Product.find({});
    if (!product) {
      return res.status(404).json({error: "Product not found"});
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
};


const productsReadOne = async function(req, res) {
  try {
    const product = await Product.findById(req.params.productid);
    if (!product) {
      return res.status(404).json({error: "Product not found"});
    }
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
};

const productsUpdateOne = function (req, res) { 
res
.status(200)
.json({"status" : "success"});
};

const productsDeleteOne = function (req, res) { 
res
.status(200)
.json({"status" : "success"});
};

module.exports = {
  productsReadAll,
  productsListByAlphabeticalOrder,
  productsCreate,
  productsReadOne,
  productsUpdateOne,
  productsDeleteOne
};

