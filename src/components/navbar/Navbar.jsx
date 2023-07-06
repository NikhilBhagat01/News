import styles from "./Navbar.module.css";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className={styles.bg}>
      <div className={styles.flex}>
        <GiHamburgerMenu size={30} className={styles.hamburger} />
        <div>
          <img
            src="https://d3pc1xvrcw35tl.cloudfront.net/assets/images/lokmat-logo-white-v0.1.png"
            alt="nav-logo"
            width={120}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
