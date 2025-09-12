import { Link, NavLink } from "react-router";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-dark bag-info navbar-expand-sm">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand">
            <i className="fa fa-snowflake-o mx-1"></i>
            Shopping App
          </NavLink>

          <div className="collapse navbar-collapse d-flex justify-content-between">
            <ul className="navbar-nav">
              <li className="navbar-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>

              <li className="navbar-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
              <li className="navbar-item">
                <Link className="nav-link" to="/products">
                  Products
                </Link>
              </li>
              <li className="navbar-item">
                <Link className="nav-link" to="/personalInfo">
                  Personal Info
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="navbar-item">
                <Link
                  className="nav-link btn btn-md btn-success "
                  to="/userRegister"
                >
                  Register
                </Link>
              </li>
              <li className="navbar-item">
                <Link
                  className="nav-link btn btn-md btn-warning"
                  to="/userLogin"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
