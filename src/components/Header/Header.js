import React from 'react';
import logo from '../../img/gitHubLogo.png';
import './Header.css';
import Link from '../Link/Link';

const Header = () => {
    return (
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My Github Portfolio</h1>
      </header>
      );
}
 
export default Header;