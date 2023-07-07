import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import admin from './css/style.module.scss';

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };
  const OpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className={admin["mobile-menu"]}>
        <div className={admin["mobile-menu-icon"]}>
          <MenuIcon onClick={OpenMenu} />
        </div>
        <div className={admin["menu-title-list"]}>
          <ul
            className={`menu-header ${
              isMenuOpen ? admin.show : admin.hide
            }`}
          >
            <li className={admin["menu-item"]} onClick={handleMenuItemClick}>
              <Link to="/admin/">
                <span className={admin["menu-title"]}>Home</span>
              </Link>
            </li>
            <li className={admin["menu-item"]} onClick={handleMenuItemClick}>
              <Link to="/admin/products">
                <span className={admin["menu-title"]}>Products</span>
              </Link>
            </li>
            {/* Các mục menu khác */}
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
