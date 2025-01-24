import React from "react";
import "./Home.css";
import { Button, Image } from "react-bootstrap";
import MenuList from "../../Components/MenuList/MenuList";
import Footer from "../../Components/footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="header">
        <div className="image-container">
          <Image src="/img1.jpg" fluid className="header-image" />
          <div className="overlay-text">
            <h1 style={{ fontSize: "45px" }}>Menu</h1>
            <p className="paragraph">
              Please take a look at our menu featuring food, drinks, and brunch.
              If you'd like to place an order, use the "Order Online" button
              located below the menu.
            </p>
          </div>
        </div>
      </div>

      <MenuList />
      <Footer />
    </div>
  );
};

export default Home;
