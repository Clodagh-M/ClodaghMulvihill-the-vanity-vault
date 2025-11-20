const mongoose = require('mongoose');
const Product = mongoose.model('Product');

const productsCreate = function(req, res) {
Product.create({ 
  productName: req.body.productName,
  brand: req.body.brand,
  category: req.body.category, 
  shadeColour: req.body.shadeColour,
  rating: req.body.rating
  })
  .then((product) => {
    res.status(201).json(product);
  })
  .catch((err) => {
    res.status(400).json(err);
  });
};

const productsReadAll = function (req, res) {
Product
.find()
.then((products) => {
if (products.length === 0) {
return res.status(404).json({ message: "No products found" });
}
res.status(200).json(products);
})
.catch((err) => {
res.status(500).json({ error: err.message });
});
};

const productsListByAlphabeticalOrder = function (req, res) { 
res
.status(200)
.json({"status" : "success"});
};

const productsReadOne = function (req, res) {
  if (req.params && req.params.productid) {  
    Product
      .findById(req.params.productid)
      .then((product,err) => {
        if (!product) {
          res	
            .status(404) 
            .json({	
              "message": "productid not found"
            });	 
          return;
        } else if (err) {
          res	
            .status(404) 
            .json(err); 
          return; 	
        }
        res		
          .status(200)
          .json(product);
      });
  } else {		
    res		
      .status(404) 	
      .json({	
        "message": "No productid in request"
      });		
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

