'use client';

import styled from 'styled-components';

export const DetailContainer = styled.div`
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
`;

export const DetailHeader = styled.div`
  position: relative;
`;

export const DetailImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const DetailBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: #10b981;
  color: white;
  font-size: 0.875rem;
  font-weight: 600;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  text-transform: uppercase;
  z-index: 10;
`;

export const DetailContent = styled.div`
  padding: 1.5rem;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

export const DetailTitle = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
`;

export const DetailSubtitle = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  margin-bottom: 1.5rem;
`;

export const DetailSection = styled.section`
  margin-top: 1.5rem;
`;

export const DetailSectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #e5e7eb;
`;

export const DetailList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const DetailListItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  color: #374151;
  
  &:not(:last-child) {
    border-bottom: 1px solid #f3f4f6;
  }
`;

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailGridItem = styled.div`
  background-color: #f9fafb;
  padding: 1rem;
  border-radius: 0.5rem;
  
  span {
    display: block;
    font-size: 0.875rem;
    color: #6b7280;
    margin-bottom: 0.25rem;
  }
  
  strong {
    font-size: 1.125rem;
    color: #111827;
  }
`;