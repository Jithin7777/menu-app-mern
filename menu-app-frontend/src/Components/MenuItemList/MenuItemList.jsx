import React, { useEffect, useState } from "react";
import { getMenuItems } from "../../services/apiService";
import { Container, Row, Col } from "react-bootstrap";
import "./MenuItemList.css";

const MenuItemList = ({ menuId, menu }) => {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const itemData = await getMenuItems(menuId);
    setItems(itemData);
  };

  useEffect(() => {
    fetchItems();
  }, [menuId]);

  return (
    <Container
      className="mt-1 bg-black  mb-4 w-100 responsive-container"
      style={{
        color: "white",
        borderRadius: "10px",
        border: "2px solid white",
      }}
    >
      <div className="text-center mb-4">
        <h1
          className="fw-bold  mt-4 gradient-heading"
          style={{
            fontSize: "24px",
            display: "inline-block",
            padding: "5px 10px",
            borderRadius: "5px",
          }}
        >
          {menu?.name.toUpperCase()} MENU
        </h1>
      </div>

      <Row>
        {items.length === 0 ? (
          <Col>
            <p className="text-center">No items available for this menu.</p>
          </Col>
        ) : (
          items.map((item) => (
            <Col
              key={item._id}
              xs={12}
              md={6}
              className="mb-4"
              style={{
                padding: "10px",
              }}
            >
              <div className="d-flex justify-content-between align-items-center ps-3">
                <h1
                  className="fw-bold menu-item-name"
                  style={{
                    fontSize: "19px",
                  }}
                >
                  {item.name.toUpperCase()}.........................
                </h1>
                <p
                  className="fw-bold menu-item-price  me-2"
                  style={{
                    fontSize: "19px",
                  }}
                >
                  ${item.price}
                </p>
              </div>
              <p className="menu-item-description ps-3">{item.description}</p>
            </Col>
          ))
        )}
      </Row>
    </Container>
  );
};

export default MenuItemList;
