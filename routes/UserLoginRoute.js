const express = require('express');
const route = express.Router();
const { userLogin, userRegister,userwhishlist,getWishlist } = require('../controllers/UserLoginController');
const auth = require('../middleware/Authmeddleware');

// Accept FORM-DATA or JSON for login & register
route.post('/login', userLogin);
route.post('/register', userRegister);
route.post('/whishlist', auth , userwhishlist);
route.get('/wishlist', auth, getWishlist);

module.exports = route; 
 