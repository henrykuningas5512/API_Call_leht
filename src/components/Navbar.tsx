import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg app-navbar sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          Tasuta mängude leht
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="mainNavbar">
          <div className="navbar-nav ms-auto gap-lg-2">
            <NavLink className="nav-link" to="/">
              Avaleht
            </NavLink>
            <NavLink className="nav-link" to="/games">
              Mängud
            </NavLink>
            <NavLink className="nav-link" to="/favorites">
              Lemmikud
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
