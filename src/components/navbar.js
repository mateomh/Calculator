/* eslint-disable arrow-body-style */
import navbarStyles from '../styles/navbar.module.css';

const NavBar = () => {
  return (
    <div className={navbarStyles.navbar}>
      <h1>Math Magicians</h1>
      <a href="/home">Home</a>
      <a href="/">Calculator</a>
      <a href="/quote">Quote</a>
    </div>
  );
};

export default NavBar;
