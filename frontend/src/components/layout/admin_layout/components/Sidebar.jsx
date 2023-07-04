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
        <li className="menu-item mt-20">
          <Link to="/admin/">
            <HomeIcon className="menu-icon font-title" />
            <span className="menu-title font-title">Home</span>
          </Link>
        </li>
        <li className="menu-item mt-20">
          <Link to="/admin/products">
            <LocalGroceryStoreIcon className="menu-icon font-title" />
            <span className="menu-title font-title">Products</span>
          </Link>
        </li>
        <li className="menu-item mt-20">
          <Link to="/admin/categories">
            <CategoryIcon className="menu-icon font-title" />
            <span className="menu-title font-title">Categories</span>
          </Link>
        </li>
        <li className="menu-item mt-20">
          <Link to="/admin/groups">
            <CardGiftcardIcon className="menu-icon font-title" />
            <span className="menu-title font-title">Groups</span>
          </Link>
        </li>
        <li className="menu-item mt-20">
          <Link to="/admin/manufacturers">
            <WarehouseIcon className="menu-icon font-title" />
            <span className="menu-title font-title">Manuafacturers</span>
          </Link>
        </li>
        <li className="menu-item mt-20">
          <Link to="/admin/coupons">
            <CardGiftcardIcon className="menu-icon font-title" />
            <span className="menu-title font-title">Coupons</span>
          </Link>
        </li>
        <li className="menu-item mt-20">
          <Link to="/admin/attributes">
            <SettingsEthernetIcon className="menu-icon font-title" />
            <span className="menu-title font-title">Attributes</span>
          </Link>
        </li>
        <li className="menu-item mt-20">
          <Link to="/admin/customers">
            <GroupIcon className="menu-icon font-title" />
            <span className="menu-title font-title">Customers</span>
          </Link>
        </li>
        <li className="menu-item mt-20">
          <Link to="8">
            <ThumbUpIcon className="menu-icon font-title" />
            <span className="menu-title font-title">Review</span>
          </Link>
        </li>
        <li className="menu-item mt-20">
          <Link to="/admin/orders">
            <ShoppingBasketIcon className="menu-icon font-title" />
            <span className="menu-title font-title">Orders</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
