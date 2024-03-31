import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router for navigation
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/menu">Menu</Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/menu/cake">Cake</Link>
                <Link className="dropdown-item" to="/menu/pastry">Pastry</Link>
                <Link className="dropdown-item" to="/menu/bread">Bread</Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sign-up">SignUp</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;