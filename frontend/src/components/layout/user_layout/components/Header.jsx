import { Link } from "react-router-dom";
import user from "./assets/style.module.scss";
import SearchIcon from '@mui/icons-material/Search';

function Header({ showSearchInput  }) {
  return (
    <header className={user.header} > 
      <Link to="goto">
        <img
          src="https://th.bing.com/th/id/OIP.ZtrNE9GnhsrUDpGXFZ2gagHaJG?pid=ImgDet&rs=1"
          alt="logo"
          className={user.logo}
        />
      </Link>
      <nav className={user.menu}>
        <ul className={user.listItems}>
          {showSearchInput  && (
          <li className={user.menuItem}>
            <input type="text" name="keyword" className={user.seachInput} placeholder="Enter everything you need to find here" />
            <SearchIcon className={user.searchBtnIcon}/>
          </li>
          )}
          <li className={user.menuItem}>Profile</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
