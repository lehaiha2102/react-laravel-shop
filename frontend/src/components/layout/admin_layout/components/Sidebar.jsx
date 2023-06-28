import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import CategoryIcon from "@mui/icons-material/Category";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="menu">
        <li className="menu-item">
          <Link to="1">
            <HomeIcon className="menu-icon" />
            <span className="menu-title text-title">Home</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/admin/products">
            <LocalGroceryStoreIcon className="menu-icon" />
            <span className="menu-title text-title">Products</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="3">
            <SettingsEthernetIcon className="menu-icon" />
            <span className="menu-title text-title">Attributes</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/admin/categories">
            <CategoryIcon className="menu-icon" />
            <span className="menu-title text-title">Categories</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="5">
            <WarehouseIcon className="menu-icon" />
            <span className="menu-title text-title">Manuafacturers</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="6">
            <CardGiftcardIcon className="menu-icon" />
            <span className="menu-title text-title">Coupons</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="7">
            <AccountCircleIcon className="menu-icon" />
            <span className="menu-title text-title">Users</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="8">
            <ThumbUpIcon className="menu-icon" />
            <span className="menu-title text-title">Review</span>
          </Link>
        </li>
        <li className="menu-item">
          <Link to="9">
            <ShoppingBasketIcon className="menu-icon" />
            <span className="menu-title text-title">Orders</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
