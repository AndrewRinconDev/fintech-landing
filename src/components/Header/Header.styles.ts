import styled from 'styled-components';
import { DefaultTheme } from 'styled-components';

interface MobileMenuProps {
  $isOpen: boolean; // Prefix with $ to indicate it's a prop
}

export const HeaderContainer = styled.header`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 50;

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  z-index: 60;
`;

export const Nav = styled.nav`
  gap: 1rem;
  align-items: center;
  display: none;

  @media (min-width: 768px) {
    gap: 1.5rem;
    display: flex;
  }
`;

export const NavItem = styled.a`
  color: ${({ theme }: { theme?: DefaultTheme }) => theme?.colors.gray[700] || '#374151'};
  font-weight: 500;
  text-decoration: none;
  transition: color 0.2s;
  font-size: 0.9rem;
  
  &:hover {
    color: ${({ theme }: { theme?: DefaultTheme }) => theme?.colors.primary.main || '#2563eb'};
  }

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  color: ${({ theme }: { theme?: DefaultTheme }) => theme?.colors.gray[700] || '#374151'};
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 60;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const MobileMenuContainer = styled.div<MobileMenuProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: white;
  display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  z-index: 50;
  padding-top: 5rem;
  transition: opacity 0.3s ease, visibility 0.3s ease;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};

  @media (min-width: 768px) {
    display: none;
  }
`;