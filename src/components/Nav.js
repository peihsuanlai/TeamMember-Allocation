import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand fixed-top navbar-light bg-light">
      <ul className="navbar-nav ms-auto me-3">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/GroupTeamMembers">
            Teams
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
