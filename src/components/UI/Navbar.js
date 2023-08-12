import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import EcoSelect from "../Custom/EcoSelect";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [theme, setTheme] = useState("normal");
  const pathname = usePathname();

  const [lineColor, setLineColor] = useState("#ffffff");

  const address = useAddress();

  useEffect(() => {
    setActive(pathname);
    console.log(pathname);

    // Set theme based on pathname
    if (pathname === "/chat") {
      setTheme("chat");
      setLineColor("#454545");
    } else {
      setTheme("normal");
    }
  }, [pathname]);

  return (
    <div
      data-theme={theme} // Use the theme state here
      className="navbar bg-accent h-[88px] padding-auto px-[40px]"
    >
      <div className="navbar-start">
        <Link href="/">
          <img src="/eigen-logo.svg" className="h-[37px] w-[36px]" alt="" />
        </Link>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end flex flex-row gap-[24px]">
        <div className="flex flex-row gap-[32px] text-[20px] text-[#fff] items-center">
          <Link href="/chat">
            <span
              className={`text-${
                active === "/chat" ? "gray-500 font-bold" : "[#fff]"
              }`}
            >
              CHAT
            </span>
          </Link>
          <Link href="/create">
            <span
              className={`text-${
                active === "/create" ? "gray-500 font-bold" : ""
              }`}
            >
              CREATE
            </span>
          </Link>
          <EcoSelect />
        </div>
        <div
          className={`h-[47px] w-[1px] border border-[${lineColor}] rounded-full`}
        ></div>
        <details className="dropdown dropdown-end">
          <summary
            tabIndex={0}
            className="flex flex-row items-center gap-[9px]  cursor-pointer"
          >
            <img className="h-[50px] w-[48px]" src="/dude.svg" alt="" />
          </summary>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-[#f5f5f5] rounded-[18px] w-[250px] "
          >
            <li>
              <ConnectWallet />
            </li>
            <li>
              <a href="/api/auth/logout">Logout</a>
            </li>
          </ul>
        </details>
      </div>
    </div>
  );
};

export default Navbar;
