/* eslint-disable arrow-body-style */
import navbarStyles from '../styles/navbar.module.css';

const NavBar = () => {
  return (
    <div className={navbarStyles.navbar}>
      <h1>Math Magicians</h1>
      <a href="/">Home</a>
      <a href="/">Calculator</a>
      <a href="/">Quote</a>
    </div>
  );
};

export default NavBar;
