import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Home</Link>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/weekly" className="nav-link">Weekly</Link>
              </li>
              <li className="nav-item">
                <Link to="/weekly-battle" className="nav-link">Weekly Battle</Link>
              </li>
              <li className="nav-item">
                <Link to="/popular" className="nav-link">Popular</Link>
              </li>
              <li className="nav-item">
                <Link to="/popular-battle" className="nav-link">Popular Battle</Link>
              </li>
              <li className="nav-item">
                <Link to="/favorites" className="nav-link">Favorites</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;