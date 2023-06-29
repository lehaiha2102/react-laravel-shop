import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import CategoryIcon from "@mui/icons-material/Category";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import GroupIcon from '@mui/icons-material/Group';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="menu">
        <li className="menu-item color-gray">
          <Link to="1">
            <HomeIcon className="menu-icon" />
            <span className="menu-title text-title">Home</span>
          </Link>
        </li>
        <li className="menu-item color-gray">
          <Link to="/admin/products">
            <LocalGroceryStoreIcon className="menu-icon" />
            <span className="menu-title text-title">Products</span>
          </Link>
        </li>
        <li className="menu-item color-gray">
          <Link to="/admin/attributes">
            <SettingsEthernetIcon className="menu-icon" />
            <span className="menu-title text-title">Attributes</span>
          </Link>
        </li>
        <li className="menu-item color-gray">
          <Link to="/admin/categories">
            <CategoryIcon className="menu-icon" />
            <span className="menu-title text-title">Categories</span>
          </Link>
        </li>
        <li className="menu-item color-gray">
          <Link to="/admin/manufacturers">
            <WarehouseIcon className="menu-icon" />
            <span className="menu-title text-title">Manuafacturers</span>
          </Link>
        </li>
        <li className="menu-item color-gray">
          <Link to="/admin/coupons">
            <CardGiftcardIcon className="menu-icon" />
            <span className="menu-title text-title">Coupons</span>
          </Link>
        </li>
        <li className="menu-item color-gray">
          <Link to="7">
            <GroupIcon className="menu-icon" />
            <span className="menu-title text-title">Customers</span>
          </Link>
        </li>
        <li className="menu-item color-gray">
          <Link to="8">
            <ThumbUpIcon className="menu-icon" />
            <span className="menu-title text-title">Review</span>
          </Link>
        </li>
        <li className="menu-item color-gray">
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
