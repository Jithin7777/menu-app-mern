import React, { useEffect, useState } from "react";
import { getMenus } from "../../services/apiService";
import { Button, Container, Row, Col } from "react-bootstrap";
import MenuItemList from "../MenuItemList/MenuItemList";

const MenuList = () => {
  const [menus, setMenus] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [activeMenuId, setActiveMenuId] = useState(null); // Track the active button

  const fetchMenus = async () => {
    const menuData = await getMenus();
    setMenus(menuData);
  };

  useEffect(() => {
    fetchMenus();
  }, []);

  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setActiveMenuId(menu._id);
  };

  return (
    <Container fluid className=" bg-black py-3">
      <Row className="justify-content-center mb-4">
        <Col xs="auto">
          <div className="d-flex flex-wrap justify-content-center gap-2 mt-2">
            {menus.map((menu) => (
              <Button
                key={menu._id}
                onClick={() => handleMenuClick(menu)}
                className={`menu-button ${
                  activeMenuId === menu._id
                    ? "bg-primary text-white"
                    : "bg-dark text-white"
                }`}
                style={{
                  border: "none",
                }}
              >
                {menu.name}
              </Button>
            ))}
          </div>
        </Col>
      </Row>

      {/* Selected Menu Items */}
      {selectedMenu && (
        <Row>
          <Col>
            <MenuItemList menu={selectedMenu} menuId={selectedMenu._id} />
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MenuList;
