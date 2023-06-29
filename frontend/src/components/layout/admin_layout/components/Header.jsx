import { Link } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

function Header() {
    return ( 
        <header className="header">
        <div className="main-logo">
          <Link to="goto">
            <img
              src="https://th.bing.com/th/id/OIP.ZtrNE9GnhsrUDpGXFZ2gagHaJG?pid=ImgDet&rs=1"
              alt="logo"
            />
          </Link>
        </div>
        <nav className="menu">
          <ul className="text-title">
            <li className="account">
              <a href="#">
                <AccountCircleIcon />
              </a>
            </li>
            <MobileMenu/>
          </ul>
        </nav>
      </header>
     );
}

export default Header;