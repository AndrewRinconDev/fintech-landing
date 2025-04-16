'use client';

import React, { useState, useEffect } from 'react';
import { HeaderContainer, Logo, Nav, NavItem, MobileMenuButton, MobileMenuContainer } from './Header.styles';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Avoid server-side rendering that differs from client-side
  if (!isMounted) {
    return (
      <HeaderContainer>
        <Logo href="/">
          <img 
            src="/images/logo.png" 
            alt="Fintech Logo" 
            width={120} 
            height={40}
            className="h-8 w-auto md:h-10"
          />
        </Logo>
        <MobileMenuButton aria-label="Main menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </MobileMenuButton>
      </HeaderContainer>
    );
  }

  return (
    <HeaderContainer>
      <Logo href="/">
        <img 
          src="/images/logo.png" 
          alt="Fintech Logo" 
          width={120} 
          height={40}
          className="h-8 w-auto md:h-10"
        />
      </Logo>

      {/* Desktop menu */}
      <Nav className="hidden md:flex">
        <NavItem href="#products">Products</NavItem>
        <NavItem href="#benefits">Benefits</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </Nav>

      {/* Mobile menu button */}
      <MobileMenuButton 
        onClick={toggleMenu} 
        aria-expanded={isMenuOpen} 
        aria-label="Main menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </MobileMenuButton>

      {/* Mobile menu */}
      <MobileMenuContainer $isOpen={isMenuOpen}>
        <NavItem href="#products" onClick={toggleMenu}>Products</NavItem>
        <NavItem href="#benefits" onClick={toggleMenu}>Benefits</NavItem>
        <NavItem href="#contact" onClick={toggleMenu}>Contact</NavItem>
      </MobileMenuContainer>
    </HeaderContainer>
  );
};

export default Header;