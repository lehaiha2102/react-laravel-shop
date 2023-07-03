import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function MobileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const OpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="mobile-menu-icon">
          <MenuIcon onClick={OpenMenu} />
        </div>
        <div className="menu-title-list">
          <ul className={`menu-header ${isMenuOpen ? "show" : "hide"}`}>
            <li className="menu-item mt-20">
              <Link to="1">
                <span className="menu-title font-title">Home</span>
              </Link>
            </li>
            <li className="menu-item mt-20">
              <Link to="/admin/products">
                <span className="menu-title font-title">Products</span>
              </Link>
            </li>
            <li className="menu-item mt-20">
              <Link to="/admin/categories">
                <span className="menu-title font-title">Categories</span>
              </Link>
            </li>
            <li className="menu-item mt-20">
              <Link to="/admin/groups">
                <span className="menu-title font-title">Groups</span>
              </Link>
            </li>
            <li className="menu-item mt-20">
              <Link to="/admin/manufacturers">
                <span className="menu-title font-title">Manuafacturers</span>
              </Link>
            </li>
            <li className="menu-item mt-20">
              <Link to="/admin/coupons">
                <span className="menu-title font-title">Coupons</span>
              </Link>
            </li>
            <li className="menu-item mt-20">
              <Link to="/admin/attributes">
                <span className="menu-title font-title">Attributes</span>
              </Link>
            </li>
            <li className="menu-item mt-20">
              <Link to="7">
                <span className="menu-title font-title">Customers</span>
              </Link>
            </li>
            <li className="menu-item mt-20">
              <Link to="8">
                <span className="menu-title font-title">Review</span>
              </Link>
            </li>
            <li className="menu-item mt-20">
              <Link to="9">
                <span className="menu-title font-title">Orders</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
