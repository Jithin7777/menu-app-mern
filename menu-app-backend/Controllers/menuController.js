const Menu=require('../models/Menu')

// Create a new menu
const createMenu = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newMenu = new Menu({
      name,
      description,
    });
    await newMenu.save();
    res.status(201).json(newMenu);
  } catch (error) {
    res.status(400).json({ message: 'Error creating menu', error });
  }
};

// Get all menus
const getMenus = async (req, res) => {
  try {
    const menus = await Menu.find();
    res.json(menus);
  } catch (error) {
    res.status(400).json({ message: 'Error fetching menus', error });
  }
};

module.exports = { createMenu, getMenus };
