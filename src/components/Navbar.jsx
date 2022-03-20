import { useState } from "react";

import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  // navbar toggler
  const [navbarOpen, setNavbarOpen] = useState(true);
  console.log("navbarOpen", navbarOpen);

  return (
    <nav className="navbar-gradient w-full flex justify-between items-center p-4">
      <div className="logo text-white text-xl">Sundus Ardian</div>
      <div className="navbar-toggler md:hidden">
        <div className="navbar-toggler-icon relative">
          {navbarOpen ? null : (
            <TiThMenu
              fontSize={24}
              color="white"
              className="cursor-pointer"
              onClick={() => setNavbarOpen(true)}
            />
          )}
          {navbarOpen && (
            <div className="z-10 top-0 -right-2 fixed w-[70vw] bg-blue-700/40 h-full animate-slide-in">
              <AiOutlineClose
                fontSize={24}
                color="white"
                className="cursor-pointer m-2"
                onClick={() => setNavbarOpen(false)}
              />
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
