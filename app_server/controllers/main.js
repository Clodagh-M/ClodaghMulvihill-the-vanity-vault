/* GET home page */
const index = function(req, res){ 
res.render('index', { title: 'Clodagh Mulvihill' }); 
};

module.exports = { 
    index 
};
