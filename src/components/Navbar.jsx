import React from "react";
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <ul className="main__ul">
        <li className="main__list">
          <NavLink style={{
            textDecoration: "none",
          }} className={"main__list-i"} to={"/"}>Todo</NavLink>
        </li>
        <li className="main__list">
          <NavLink style={{
            textDecoration: "none",
          }} className={"main__list-i"} to={"/settings"}>Settings</NavLink>
        </li>
        <li className="main__list">
          <NavLink style={{
            textDecoration: "none",
          }} className={"main__list-i"} to={"/history"}>History</NavLink>
        </li>
        <li className="main__list">
          <NavLink style={{
            textDecoration: "none",
          }} className={"main__list-i"} to={"/contact"}>Contact</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
