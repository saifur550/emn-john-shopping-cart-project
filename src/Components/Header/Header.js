import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header-top">
          <img className="logo" src={logo} alt="" />
          <nav>
              <a href="/shop">Shop</a>
              <a href="/orders">Order Review</a>
              <a href="/inventory">Manage Inventroy</a>
              </nav>
        </div>
    );
};

export default Header;