import { useState } from "react";
import Link from "next/link";
import Menu, { Item } from "../components/Menu";

export interface IHeader extends React.HTMLAttributes<HTMLHeadingElement> {
  theme?: "light" | "dark";
}

const Header: React.FC<IHeader> = ({ theme, ...rest }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-gray-800 w-full px-7">
      <header {...rest}>
        <nav className="w-full max-w-6xl ml-auto mr-auto">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex items-center justify-between  lg:w-full">
              <h1 className="text-blue-700">JPG Publicidad</h1>
              <div className="hidden lg:block">
                <Menu theme={theme}>
                  <Item theme={theme}>
                    <Link href="#about-us">
                      <a>Nosotros</a>
                    </Link>
                  </Item>
                  <Item theme={theme}>
                    <Link href="#contact">
                      <a>Contacto</a>
                    </Link>
                  </Item>
                </Menu>
              </div>
            </div>
            <div className="lg:hidden ml-3 relative">
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="inline-flex items-center justify-center p-1 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <img
                  onClick={() => setOpen(!open)}
                  style={{ height: "25px" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className={`${open ? "" : "hidden fixed top-16"}`}>
            <Menu theme={theme} layout="vertical">
              <Item>
                <Link href="#about-us">
                  <a>Nosotros</a>
                </Link>
              </Item>
              <Item>Contacto</Item>
            </Menu>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
