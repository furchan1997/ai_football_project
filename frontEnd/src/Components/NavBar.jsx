import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <nav className="navbar bg-light">
        <div className="container-fluid">
          <button
            className="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sideMenu"
          >
            ☰ תפריט
          </button>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="sideMenu"
        aria-labelledby="sideMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sideMenuLabel">
            תפריט ניווט
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="סגור"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="list-unstyled">
            <li>
              <Link to={"/"} className="nav-link">
                בית
              </Link>
            </li>
            <li>
              <Link to={"/Favorites"} className="nav-link">
                שיחות מועדפות
              </Link>
            </li>
            <li>
              <Link to={"/News"} className="nav-link">
                חדשות וידיעות
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
