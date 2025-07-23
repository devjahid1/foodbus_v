import { Link, NavLink } from "react-router-dom";
import logo from "../assets/Mask group.png";
import navIcon from "../assets/nav-icon.png";

const Nav = () => {
  return (
    <div className="navbar w-full max-w-[1440px] mx-auto px-4 py-4">

      <div className="lg:hidden flex justify-between items-center w-full">
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>


        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="cursor-pointer">
            <img src={navIcon} alt="Menu" className="h-8 w-8" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[10] p-4 shadow bg-base-100 rounded-box w-52 text-black"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/gallery">Gallery</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/add-item">Add item</NavLink>
            </li>
            <li>
              <NavLink to="/all-item">Added items</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex justify-between items-center w-full text-white">
        <ul className="menu menu-horizontal px-1 text-[18px] w-full justify-around items-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/gallery">Gallery</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>

          <li>
            <Link to="/">
              <img src={logo} alt="Logo" className="h-12" />
            </Link>
          </li>

            <li>
              <NavLink to="/add-item">Add Food</NavLink>
            </li>
            <li>
              <NavLink to="/all-item">Added items</NavLink>
            </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
