import MenuIcon from "@mui/icons-material/Menu";
import * as React from "react";

function MobileMenu() {
  const OpenMenu = () => {
    console.log("hello");
  };

  return (
    <>
    <div className="menu-icon mobile-dropdown">
      <MenuIcon onClick={OpenMenu} />
    </div>
    </>
  );
}

export default MobileMenu;
