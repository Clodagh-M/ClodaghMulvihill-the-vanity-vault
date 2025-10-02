/* GET 'home' page */
const home = function(req, res){
    res.render('home', { title: 'Home' });
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
    home,
    login,
    register
};
