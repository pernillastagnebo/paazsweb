import React from 'react';
import { Link } from "react-router-dom";
import { Flex } from 'rebass';
import styled from '@emotion/styled';

const HeaderContainer = styled(Flex)`
  justify-content: space-between;
  padding: 10px 0 50px 10px;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 2rem;
  color: white;
  font-family: 'Fuggles', cursive;
  font-weight: bold;
  background: #065054;
  border-radius: 50%;
  padding: 5px 10px;
  text-decoration: none;
`;

const Menu = styled(Flex)``;

const MenuItem = styled(Link)`
  margin: 0 30px;
  font-size: 0.9rem;
  text-decoration: none;
  color: #000;
`;

const menuItems = [
  {
    name: 'About',
    destination: '/about'
  },
  {
    name: 'Experience',
    destination: '/experience'
  },
  {
    name: 'Portfolio',
    destination: '/portfolio'
  },
  {
    name: 'Contact',
    destination: '/contact'
  }
]

const Header = () => {
  return (
    <HeaderContainer>
        <Logo to='/'>PS</Logo>
        <Menu>
          {menuItems.map(item =>
            <MenuItem to={item.destination}>{item.name}</MenuItem>
            )}
        </Menu>
    </HeaderContainer>
  );
}

export default Header;
