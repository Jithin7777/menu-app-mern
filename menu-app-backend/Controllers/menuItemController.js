const MenuItem = require("../models/MenuItem");
const Menu = require("../models/Menu");

// Create a new menu item
const createMenuItem = async (req, res) => {
  const { name, description, price, menuId } = req.body;

  try {
    const newItem = new MenuItem({
      name,
      description,
      price,
      menuId,
    });

    await newItem.save();

    const menu = await Menu.findById(menuId);
    menu.items.push(newItem._id);
    await menu.save();

    res.status(201).json(newItem);
  } catch (error) {
    res.status(400).json({ message: "Error creating menu item", error });
  }
};

// Get all menu items for a specific menu
const getItemsByMenu = async (req, res) => {
  const { menuId } = req.params;

  try {
    const items = await MenuItem.find({ menuId });
    res.json(items);
  } catch (error) {
    res.status(400).json({ message: "Error fetching items", error });
  }
};

module.exports = { createMenuItem, getItemsByMenu };
