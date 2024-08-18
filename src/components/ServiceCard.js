import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const ServiceCard = ({ title, description }) => {
  return (
    <Card>
      <ServiceTitle>{title}</ServiceTitle>
      <ServiceDescription>{description}</ServiceDescription>
    </Card>
  );
};

export default ServiceCard;
