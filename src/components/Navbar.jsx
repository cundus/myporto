import { useState } from "react";

import { TiThMenu } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = (props) => {
  const { hero, work, activeLink, contact } = props;
  // navbar toggler
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navScroll = (title) => {
    if (navbarOpen) setNavbarOpen(false);
    switch (title.toLowerCase()) {
      case "hero":
        hero.current.scrollIntoView({
          behavior: "smooth",
          block: "end",
          alignToTop: true,
        });
        break;
      case "work":
        console.log(work.current, title);
        work.current.scrollIntoView({
          behavior: "smooth",
          alignToTop: true,
        });
        break;
      case "contact":
        contact.current.scrollIntoView({
          behavior: "smooth",
          alignToTop: true,
        });

      default:
        null;
        break;
    }
  };

  const navData = [
    {
      id: 1,
      title: "Work",
      link: "/",
    },
    {
      id: 2,
      title: "Capabilities",
      link: "/about",
    },
    {
      id: 3,
      title: "Contact",
      link: "/contact",
    },
  ];

  const NavMenu = ({ title, onPress }) => {
    return (
      <li
        onClick={() => navScroll(title)}
        className="block cursor-pointer mx-4 my-2 text-lg text-white font-mono transition duration-100 ease-in hover:text-blue-500 hover:scale-125"
      >
        {title}
      </li>
    );
  };

  return (
    <nav className="sticky top-0 bg-black w-full flex justify-between items-center p-4 animate-fade-in">
      <div
        className="logo hover:scale-110  hover:text-blue-400 hover:font-bold text-white text-lg md:text-2xl font-mono ml-3 cursor-pointer transition duration-200 ease-in"
        onClick={() => navScroll("hero")}
      >
        Sundus Ardian
      </div>
      <div className="navmenu">
        <ul className="hidden md:flex">
          {navData.map((nav) => (
            <NavMenu
              key={nav.id}
              title={nav.title}
              onPress={() => {
                console.log("nav.link", nav.link);
              }}
            />
          ))}
        </ul>
      </div>
      <div className="navbar-toggler md:hidden">
        <div className="navbar-toggler-icon relative">
          {navbarOpen ? null : (
            <TiThMenu
              fontSize={24}
              //   color="white"
              className="cursor-pointer text-white"
              onClick={() => setNavbarOpen(true)}
            />
          )}
          {navbarOpen && (
            <ul className=" px-4 z-10 top-0 -right-2 fixed w-[60vw] bg-black/90 h-full  animate-slide-in rounded-lg shadow-2xl list-none flex flex-col items-end ">
              <li>
                <AiOutlineClose
                  fontSize={24}
                  //   color="white"
                  className="text-white cursor-pointer m-4"
                  onClick={() => setNavbarOpen(false)}
                />
              </li>
              {navData.map((item) => (
                <NavMenu key={item.id} title={item.title} active={activeLink} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
