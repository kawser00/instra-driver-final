import React from 'react';
import './Header.css';
import logo from '../../Assets/icons/logo.png';
import menuIcon from '../../Assets/icons/Menu-icon.png';

const Header = () => {
  return (
    <div className="header bg-white">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/#">
            <img src={logo} className="img-fluid" height="55" alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto text-center">
              <li className="nav-item">
                <a className="nav-link mx-2" href="/#"><button className="btn btn-style">Jobs</button></a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="/#"><button className="btn btn-style">Get Social</button></a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="/#"><button className="btn btn-style box">James Keem</button></a>
              </li>
              <li className="nav-item menu-hide">
                <a className="nav-link mx-2" href="/#"><button className="btn "><span className="mr-1">Menu</span> <img src={menuIcon} alt="" /></button></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ height: '30px' }} className="bg-dark"></div>
    </div>
  );
};

export default Header;