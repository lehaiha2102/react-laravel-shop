import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import admin from './css/style.module.scss';

function Header() {
    return ( 
        <header className={admin.header}>
        <div className={admin["main-logo"]}>
          <Link to="goto">
            <img
              src="https://th.bing.com/th/id/OIP.ZtrNE9GnhsrUDpGXFZ2gagHaJG?pid=ImgDet&rs=1"
              alt="logo"
            />
          </Link>
        </div>
        <nav className={admin["menu"]}>
          <ul className={admin["text-title"]}>
            <li className={admin["account"]}>
              <span >
                <AccountCircleIcon className={admin["account-icon"]}/>
              </span>
            </li>
            <MobileMenu/>
          </ul>
        </nav>
      </header>
     );
}

export default Header;