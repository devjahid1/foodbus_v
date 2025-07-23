import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

import MenuBanner from "../components/MenuBanner";
import MenuAbout from "../components/MenuAbout";
import MainMenu from "../components/MainMenu";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import GallaryGrid from "../components/GallaryGrid";
import { Outlet } from "react-router-dom";

const Menu = () => {
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToMenu && menuRef.current) {
      setTimeout(() => {
        menuRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <div className="mb-20">
      <MenuBanner />
      <MenuAbout />

      <div
        ref={menuRef}
        className="w-full max-w-[1440px] mx-auto mt-5 lg:flex lg:justify-center "
      >
        <div className="w-full max-w-[520px] mx-auto mb-20 lg:mb-0">
          <MainMenu />
        </div>
        <div className="w-full max-w-[620px] mx-auto">
          <Outlet />
        </div>
      </div>

      <About />
      <Testimonials />
      <GallaryGrid />
    </div>
  );
};

export default Menu;
