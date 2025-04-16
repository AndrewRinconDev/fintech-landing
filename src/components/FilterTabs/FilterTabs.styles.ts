import styled from 'styled-components';

interface TabButtonProps {
  $isActive: boolean; // Convención: usar $ para props que no son del DOM
}

export const TabContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.gray[300]};
    border-radius: 2px;
  }
  
  @media (min-width: 768px) {
    justify-content: center;
  }
`;

export const TabButton = styled.button<TabButtonProps>`
  padding: 0.5rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 0.875rem;
  font-weight: 500;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.2s ease;
  
  background-color: ${({ $isActive, theme }) => 
    $isActive ? theme.colors.primary.main : theme.colors.gray[100]};
  color: ${({ $isActive, theme }) => 
    $isActive ? 'white' : theme.colors.gray[700]};
  
  &:hover {
    background-color: ${({ $isActive, theme }) => 
      $isActive ? theme.colors.primary.dark : theme.colors.gray[200]};
  }
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary.light};
    outline-offset: 2px;
  }
  
  &[aria-selected="true"] {
    box-shadow: ${({ theme }) => theme.shadows.md};
  }
`;