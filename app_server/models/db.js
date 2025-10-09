const mongoose = require('mongoose');
const dbURI = "mongodb+srv://clodagh-mu:ClodaghMulvihill@cluster0.87s1ahw.mongodb.net/MyProject?retryWrites=true&w=majority&appName=Cluster0";

try {
   
mongoose.connect(
    dbURI,
    {  }).then(
    () => {console.log(" Mongoose is connected")},
	err=> {console.log(err)}
	);
}
 catch (e) {
  console.log("could not connect");
}
require('./products');
