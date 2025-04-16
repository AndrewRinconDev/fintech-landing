'use client';

import styled from 'styled-components';

export const MeterContainer = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e5e7eb;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 0.5rem;
`;

export const MeterBar = styled.div<{ level: 'bajo' | 'medio' | 'alto' }>`
  height: 100%;
  width: ${({ level }) => 
    level === 'bajo' ? '33%' : 
    level === 'medio' ? '66%' : '100%'};
  background-color: ${({ level }) => 
    level === 'bajo' ? '#10b981' : 
    level === 'medio' ? '#f59e0b' : '#ef4444'};
  transition: width 0.5s ease, background-color 0.3s ease;
`;

export const MeterLabel = styled.span`
  display: block;
  font-size: 0.75rem;
  color: #6b7280;
  text-transform: capitalize;
  margin-bottom: 0.25rem;
`;

export const RiskLevels = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 0.25rem;
  
  span {
    font-size: 0.7rem;
    color: #9ca3af;
    
    &:first-child {
      color: ${({ theme }) => theme.colors?.green?.[500] || '#10b981'};
    }
    
    &:nth-child(2) {
      color: ${({ theme }) => theme.colors?.yellow?.[500] || '#f59e0b'};
    }
    
    &:last-child {
      color: ${({ theme }) => theme.colors?.red?.[500] || '#ef4444'};
    }
  }
`;