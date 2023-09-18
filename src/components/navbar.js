import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to={"#"} className="nav-link" data-widget="pushmenu" role="button"><i className="fas fa-bars"></i></Link>
        </li>
        <li className="nav-item d-none d-sm-inline-block">
          <Link to={"#"} href="../../index3.html" className="nav-link">Salir</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;