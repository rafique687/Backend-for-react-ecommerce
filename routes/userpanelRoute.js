const express = require('express');
const route = express.Router();
const { viewuserpanel} = require('../controllers/usePanelController');

//route.post('/adduserpane', adduserpanel);
route.get('/viewuserpanel', viewuserpanel);

module.exports =route;

