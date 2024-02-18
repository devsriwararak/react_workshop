import React from "react";
import Home from "./Home";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gray-200 h-screen">
      {/* Header */}
      <Header />

      {/* Content */}
      <div >
        <Outlet />
      </div>
     
    </div>
  );
};

export default Layout;
