import React from 'react';
import { HeaderContainer, Logo, Nav, NavItem } from './Header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo href="/">
        <img src="/images/logo.svg" alt="Fintech Logo" width={120} height={40} />
      </Logo>
      <Nav>
        <NavItem href="#products">Productos</NavItem>
        <NavItem href="#benefits">Beneficios</NavItem>
        <NavItem href="#contact">Contacto</NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;