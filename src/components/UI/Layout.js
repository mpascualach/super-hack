import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children, theme }) => {
  return (
    <div
      className="text-black"
      data-theme={theme === "chat" ? "chat" : "normal"}
    >
      <Navbar />
      <div className="px-[48px] py-[32px] bg-background">{children}</div>
    </div>
  );
};

export default Layout;
