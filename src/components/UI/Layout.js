import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="px-[48px] py-[32px]">{children}</div>
    </div>
  );
};

export default Layout;
