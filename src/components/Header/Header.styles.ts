'use client';

import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const Logo = styled.a`
  font-weight: 700;
  font-size: 1.5rem;
  color: #2563eb;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1.5rem;
`;

export const NavItem = styled.a`
  color: #4b5563;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
  
  &:hover {
    color: #2563eb;
  }
`;