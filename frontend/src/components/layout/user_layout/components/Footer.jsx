import user from "./assets/style.module.scss";

function Footer() {
    return ( <footer className={user.footer}>
    <div className={user.footerColumn}>
      <h3 className={user.footerColumnTitle}>Cột 1</h3>
      <ul className={user.footerList}>
        <li className={user.footerItem}>Item 1</li>
        <li className={user.footerItem}>Item 2</li>
        <li className={user.footerItem}>Item 3</li>
      </ul>
    </div>
    <div className={user.footerColumn}>
      <h3 className={user.footerColumnTitle}>Cột 2</h3>
      <ul className={user.footerList}>
        <li className={user.footerItem}>Item 1</li>
        <li className={user.footerItem}>Item 2</li>
        <li className={user.footerItem}>Item 3</li>
      </ul>
    </div>
    <div className={user.footerColumn}>
      <h3 className={user.footerColumnTitle}>Cột 3</h3>
      <ul className={user.footerList}>
        <li className={user.footerItem}>Item 1</li>
        <li className={user.footerItem}>Item 2</li>
        <li className={user.footerItem}>Item 3</li>
      </ul>
    </div>
  </footer> );
}

export default Footer;