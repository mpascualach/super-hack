import React from "react";
import Navbar from "../Navbar";

const Layout = ({ children }) => {
  return (
    <div className="text-black">
      <Navbar />
      <div className="px-[48px] py-[32px]">{children}</div>
    </div>
  );
};

export default Layout;
