const express = require('express');
const { createMenu, getMenus } = require('../Controllers/menuController');

const router = express.Router();

// Route for creating a menu
router.post('/', createMenu);

// getting all menus
router.get('/', getMenus);

module.exports = router;
