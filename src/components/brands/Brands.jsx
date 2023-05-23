import React from 'react';
import SectionContainer from '../utils/SectionContainer';
import { styled } from 'styled-components';

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 5rem;
  flex-wrap: wrap;
  & img {
    width: 10rem;
    height: 10rem;
  }
`;

const Brands = () => {
  return (
    <SectionContainer style={{ paddingBottom: '5rem' }}>
      <ContentContainer>
        <img src='./logos/img1.png' alt='Brand Logo' />
        <img src='./logos/img2.png' alt='Brand Logo' />
        <img src='./logos/img3.png' alt='Brand Logo' />
        <img src='./logos/img4.png' alt='Brand Logo' />
        <img src='./logos/img5.png' alt='Brand Logo' />
        <img src='./logos/img6.png' alt='Brand Logo' />
        <img src='./logos/img7.png' alt='Brand Logo' />
        <img src='./logos/img8.png' alt='Brand Logo' />
      </ContentContainer>
    </SectionContainer>
  );
};

export default Brands;
