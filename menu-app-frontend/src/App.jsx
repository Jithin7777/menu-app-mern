import React from "react";
import Navbar from "./Components/Navbar/CustomNavbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>} />
      </Routes>
    </div>
  );
};

export default App;
