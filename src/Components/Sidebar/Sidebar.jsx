import React from 'react';
import './Sidebar.css';
import icon1 from '../../Assets/icons/icon1.png';
import icon2 from '../../Assets/icons/icon2.png';
import icon3 from '../../Assets/icons/icon3.png';
import icon4 from '../../Assets/icons/icon4.png';
import icon5 from '../../Assets/icons/icon5.png';
import icon6 from '../../Assets/icons/icon6.png';
import icon7 from '../../Assets/icons/icon7.png';
import icon8 from '../../Assets/icons/icon8.png';
import vector from '../../Assets/icons/Vector.png';
import dotIcon from '../../Assets/icons/dotIcon.png';


const Sidebar = () => {
  return (
    <div className="sidebar">
        <nav className="navbar">
          <ul className="navbar-nav flex-column w-100">
            <li className="nav-item">
              <a className="nav-link mt-3" href="/#"><span className="mr-2"><img src={icon1} alt="" /></span> Employer Profile <img src={vector} alt="" /></a>
            </li>
            <li className="nav-item">
              <a style={{ fontSize: "14px" }} className="nav-link mt-3" href="/#"><span className="mr-2"><img src={icon2} alt="" /></span> Onboard Your Vehicles</a>
            </li>
            <li className="nav-item">
              <a style={{ fontSize: "14px" }} className="nav-link mt-3" href="/#"><span className="mr-2"><img src={icon3} alt="" /></span> Search & Hire Drivers</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-3 inbox text-dark" href="/#"><span className="mr-2"><img className="px-2" src={icon4} alt="" /></span> Inbox <img className="ml-3" src={dotIcon} alt="" /></a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-3" href="/#"><span className="mr-2"><img src={icon5} alt="" /></span> Recruitment</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-3" href="/#"><span className="mr-2"><img src={icon6} alt="" /></span> My Organizations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-3" href="/#"><span className="mr-2"><img src={icon7} alt="" /></span> Rate A Driver</a>
            </li>
            <li className="nav-item">
              <a className="nav-link mt-3" href="/#"><span className="mr-2"><img src={icon8} alt="" /></span> My Subscription</a>
            </li>
          </ul>
        </nav>
    </div>
  );
};

export default Sidebar;