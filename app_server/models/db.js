const mongoose = require('mongoose');
const dbURI = "mongodb+srv://clodagh-mu:ClodaghMulvihill@cluster0.00wzfxg.mongodb.net/MyProject?retryWrites=true&w=majority";

try {
   
mongoose.connect(
    dbURI,
    { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log(" Mongoose is connected")},
	err=> {console.log(err)}
	);
}
 catch (e) {
  console.log("could not connect");
}
require('./products');
