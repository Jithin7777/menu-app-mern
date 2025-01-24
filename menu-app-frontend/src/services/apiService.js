import axios from "axios";

const API_URL='https://menu-app-backend-5d5v.onrender.com/api'

// const API_URL='http://localhost:5005/api'
// Get all menus
export const getMenus = async () => {
    try {
      const response = await axios.get(`${API_URL}/menus`);
      return response.data;
    } catch (error) {
      console.error('Error fetching menus', error);
    }
  };


  // Get menu items by menuId
export const getMenuItems = async (menuId) => {
    try {
      const response = await axios.get(`${API_URL}/menu-items/${menuId}/items`);
      return response.data;
    } catch (error) {
      console.error('Error fetching menu items', error);
    }
  };
