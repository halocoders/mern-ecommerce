import React from 'react';
import styled from 'styled-components';

const ContainerAnn = styled.div`
  height: 30px;
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

const Announcement = () => {
  return (
    <ContainerAnn>Super Deal! Free Shipping on Orders Over $50</ContainerAnn>
  );
};

export default Announcement;
