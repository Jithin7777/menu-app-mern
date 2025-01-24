const express = require('express');
const { createMenuItem, getItemsByMenu } = require('../Controllers/menuItemController');

const router = express.Router();

// Route for creating a menu item
router.post('/', createMenuItem);

//  getting items by menu ID
router.get('/:menuId/items', getItemsByMenu);

module.exports = router;
