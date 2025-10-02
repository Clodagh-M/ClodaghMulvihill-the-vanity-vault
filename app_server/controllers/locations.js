/* GET 'home' page */
const data = function(req, res){
    res.render('data', { 
        title: 'Data Page',
        products: [{
            "productName": "Glowy Super Gel",
            "brand": 'Saie',
            "category": 'Skincare',
            "shadeColour": 'Starglow',
            "rating": 5
        },{
            "productName": 'Hollywood Contour Wand',
            "brand": 'Charlotte Tilbury',
            "category": 'Contour',
            "shadeColour": 'Fair',
            "rating": 4.5
        },{
            "productName": 'MyMascara',
            "brand": 'Sculpted by Aimee',
            "category": 'Mascara',
            "shadeColour": 'Black',
            "rating": 3
        },{
            "productName": 'Hydro Grip Primer',
            "brand": 'Milk Makeup',
            "category": 'Primer',
            "shadeColour": 'N/A',
            "rating": 5
        }]
    });
};

/* GET 'login' page */
const login = function(req, res){
    res.render('login', { title: 'Login' });
};
/* GET 'register' page */
const register = function(req, res){
    res.render('index', { title: 'Register' });
};
module.exports = {
    data,
    login,
    register
};
