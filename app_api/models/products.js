const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
productName: {
type: String,
required: true
},
brand: {
type: String,
required: true
},
category: {
type: String,
required: true
},
shadeColour: String,
rating: {
type: Number,
'default': 0,
min: 0,
max: 5
}
});

mongoose.model('Product', productSchema);
