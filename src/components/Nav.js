import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand fixed-top navbar-light bg-light">
      <ul className="navbar-nav ms-auto me-3">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/GroupTeamMembers">
            Teams
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
