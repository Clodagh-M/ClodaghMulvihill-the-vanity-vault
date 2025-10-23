const request = require('request');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcrypt');

const apiOptions = { 
  server : 'http://localhost:3000' 
}; 
if (process.env.NODE_ENV === 'production') { 
  apiOptions.server = 'https://myproject-kab7.onrender.com'; 
}

const _renderHomepage = function(req, res, responseBody){
  res.render('data', {
    pageHeader: {
      title: 'the vanity vault'
    },
    data: responseBody
  });
};

const data = function(req, res){
  const path = '/api/products'; 
  const requestOptions = { 
    url : apiOptions.server + path, 
    method : 'GET', 
    json : {}, 
    qs : { 
      lng : -0.9690884, 
      lat : 51.455041, 
      maxDistance : 20 
    } 
  }; 
  request(
    requestOptions,function(err, response, body) {
      _renderHomepage(req, res, body); 
    }
  );
};

/* GET 'about' page */
const about = function(req, res){
  res.render('about', { title: 'About Us' });
};

/* GET 'login' page */
const login = function(req, res){
  res.render('login', { title: 'Login' });
};

/* POST 'login' processing */
const doLogin = async function(req, res){
  try {
    const { email, password } = req.body;
    
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.render('login', { 
        title: 'Login',
        error: 'Invalid email or password' 
      });
    }
    
    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.render('login', { 
        title: 'Login',
        error: 'Invalid email or password' 
      });
    }
    
    // Login successful - redirect to data page
    res.redirect('/data');
    
  } catch (err) {
    console.error(err);
    res.render('login', { 
      title: 'Login',
      error: 'Server error occurred' 
    });
  }
};

/* GET 'register' page */
const register = function(req, res){
  res.render('index', { title: 'Register' });
};

/* POST 'register' processing */
const doRegister = async function(req, res){
  try {
    const { forename, surname, email, telNo, password } = req.body;
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.render('index', { 
        title: 'Register',
        error: 'User already exists with this email' 
      });
    }
    
    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    
    // Create new user
    const newUser = new User({
      forename,
      surname,
      email,
      telNo,
      password: hashedPassword
    });
    
    await newUser.save();
    
    // Registration successful - redirect to login
    res.redirect('/login');
    
  } catch (err) {
    console.error(err);
    res.render('index', { 
      title: 'Register',
      error: 'Registration failed. Please try again.' 
    });
  }
};

module.exports = {
  data,
  about,
  login,
  register,
  doLogin,
  doRegister
};