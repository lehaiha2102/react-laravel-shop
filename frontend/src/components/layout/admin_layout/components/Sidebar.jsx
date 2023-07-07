import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import SettingsEthernetIcon from "@mui/icons-material/SettingsEthernet";
import CategoryIcon from "@mui/icons-material/Category";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import GroupIcon from "@mui/icons-material/Group";
import PublicIcon from "@mui/icons-material/Public";
import admin from "./css/style.module.scss";

function Sidebar() {
  return (
    <aside className={admin.sidebar}>
      <ul className={admin.menu}>
        <li className={`${admin["menu-item"]} ${admin["mt-20"]}`}>
          <Link to="/admin/">
            <HomeIcon
              className={`${admin["menu-icon"]} ${admin["font-title"]}`}
            />
            <span className={admin["menu-title"]}>Home</span>
          </Link>
        </li>
        <li className={`${admin["menu-item"]} ${admin["mt-20"]}`}>
          <Link to="/admin/products">
            <LocalGroceryStoreIcon
              className={`${admin["menu-icon"]} ${admin["font-title"]}`}
            />
            <span className={admin["menu-title"]}>Products</span>
          </Link>
        </li>
        <li className={`${admin["menu-item"]} ${admin["mt-20"]}`}>
          <Link to="/admin/categories">
            <CategoryIcon
              className={`${admin["menu-icon"]} ${admin["font-title"]}`}
            />
            <span className={admin["menu-title"]}>Categories</span>
          </Link>
        </li>
        <li className={`${admin["menu-item"]} ${admin["mt-20"]}`}>
          <Link to="/admin/groups">
            <CardGiftcardIcon
              className={`${admin["menu-icon"]} ${admin["font-title"]}`}
            />
            <span className={admin["menu-title"]}>Groups</span>
          </Link>
        </li>
        <li className={`${admin["menu-item"]} ${admin["mt-20"]}`}>
          <Link to="/admin/manufacturers">
            <WarehouseIcon
              className={`${admin["menu-icon"]} ${admin["font-title"]}`}
            />
            <span className={admin["menu-title"]}>Manuafacturers</span>
          </Link>
        </li>
        <li className={`${admin["menu-item"]} ${admin["mt-20"]}`}>
          <Link to="/admin/coupons">
            <CardGiftcardIcon
              className={`${admin["menu-icon"]} ${admin["font-title"]}`}
            />
            <span className={admin["menu-title"]}>Coupons</span>
          </Link>
        </li>
        <li className={`${admin["menu-item"]} ${admin["mt-20"]}`}>
          <Link to="/admin/attributes">
            <SettingsEthernetIcon
              className={`${admin["menu-icon"]} ${admin["font-title"]}`}
            />
            <span className={admin["menu-title"]}>Attributes</span>
          </Link>
        </li>
        <li className={`${admin["menu-item"]} ${admin["mt-20"]}`}>
          <Link to="/admin/customers">
            <GroupIcon
              className={`${admin["menu-icon"]} ${admin["font-title"]}`}
            />
            <span className={admin["menu-title"]}>Customers</span>
          </Link>
        </li>
        <li className={`${admin["menu-item"]} ${admin["mt-20"]}`}>
          <Link to="/admin/reviews">
            <ThumbUpIcon
              className={`${admin["menu-icon"]} ${admin["font-title"]}`}
            />
            <span className={admin["menu-title"]}>Review</span>
          </Link>
        </li>
        <li className={`${admin["menu-item"]} ${admin["mt-20"]}`}>
          <Link to="/admin/orders">
            <ShoppingBasketIcon
              className={`${admin["menu-icon"]} ${admin["font-title"]}`}
            />
            <span className={admin["menu-title"]}>Orders</span>
          </Link>
        </li>
        <li className={`${admin["menu-item"]} ${admin["mt-20"]}`}>
          <Link to="/admin/globals">
            <PublicIcon
              className={`${admin["menu-icon"]} ${admin["font-title"]}`}
            />
            <span className={admin["menu-title"]}>Global</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
