import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark ">
        <div class="container-fluid">
          <span className="navbar-brand" id="companyName">
            <img src={"/mylogo.jpg"} alt="img" />
            AMAR PARIHAR{" "}
          </span>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/aboutme" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/mywork" className="nav-link">
                  Work
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/certificate" className="nav-link">
                  Certficates
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contactme" className="nav-link">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
