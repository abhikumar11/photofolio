import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo} onClick={() => window.location.replace("/")}>
        <img src="/assets/logo.png" alt="logo" />
        <span>PhotoFolio</span>
      </div>
    </div>
  );
};
export default Navbar;