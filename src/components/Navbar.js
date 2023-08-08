import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const pathname = usePathname();

  const address = useAddress();

  useEffect(() => {
    setActive(pathname);
    console.log(pathname);
  }, [pathname]);

  return (
    <div className="navbar bg-base-100 h-[88px] padding-auto px-[40px] ">
      <div className="navbar-start">
        <Link href="/">
          <img src="/eigen-logo.svg" className="h-[37px] w-[36px]" alt="" />
        </Link>
      </div>
      <div className="navbar-center"></div>
      <div className="navbar-end">
        <div className="flex flex-row gap-[48px] text-[20px] text-[#699BF7]">
          <Link href="/explore">
            <span
              className={`text-${
                active === "/explore" ? "gray-500 font-bold" : "[#699BF7]"
              }`}
            >
              eXPLORE
            </span>
          </Link>
          <Link href="/create">
            <span
              className={`text-${
                active === "/create" ? "gray-500 font-bold" : ""
              }`}
            >
              cREATE
            </span>
          </Link>
          <Link href="/generate">
            <span
              className={`text-${
                active === "/generate" ? "gray-500 font-bold" : "base-500"
              }`}
            >
              dASHBOARD
            </span>
          </Link>
        </div>
        <details className="dropdown dropdown-end">
          <summary className="m-1 btn text-black">DUde</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <ConnectWallet theme="light" />
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
