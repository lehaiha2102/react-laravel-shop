import { Link } from "react-router-dom";
import "./assets/style.css";
function Header() {
    return ( 
        <header>
        <div className="w-12">
          <Link to="goto">
            <img
              src="https://th.bing.com/th/id/OIP.ZtrNE9GnhsrUDpGXFZ2gagHaJG?pid=ImgDet&rs=1"
              alt="logo"
            />
          </Link>
        </div>
        <nav className="">
          <ul className="">
            <li className="">
              <span >
               
              </span>
            </li>
            
          </ul>
        </nav>
      </header>
     );
}

export default Header;