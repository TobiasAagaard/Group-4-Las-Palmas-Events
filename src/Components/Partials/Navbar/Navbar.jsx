import { NavLink } from "react-router-dom";
// import Styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink>Login</NavLink>
        </li>
        <li>
          <NavLink>Sign up</NavLink>
        </li>
        <li>
          <NavLink></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export { Navbar };
