import React from 'react';
import styled from 'styled-components';
import logo from '../../img/gitHubLogo.png';

const AppHeader = styled.div`
height: 100%;
background-color: #282c34;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`;

const AppLogo = styled.img`
height: 64px;
pointer-events: none;
`;

const Header = () => {
    return (
        <AppHeader className="App-header">
        <AppLogo src={logo} className="App-logo" alt="logo" />
        <h1>My Github Portfolio</h1>
      </AppHeader>
      );
}
 
export default Header;