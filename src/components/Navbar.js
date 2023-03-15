import logo from "../images/logo2.png";
function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary custom-nav mx-auto">
        <div className="container">
          <a className="navbar-brand" href="/#products">
            <img src={logo} className="logo" alt="logo" />
          </a>
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link fs-6" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-6" aria-current="page" href="/">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-6" href="#/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-6" href="/cart">
                  Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
