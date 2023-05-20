import { styled } from 'styled-components';
import SectionTitle from '../utils/SectionTitle';
import { forwardRef } from 'react';

const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 8% 5rem;
  background: url('./logos/servicesBg.png'), #80808095;
  background-size: cover;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10rem;
`;

const ServicesList = styled.ul`
  display: flex;
  gap: 5rem;
  font-size: 2rem;
`;
const Service = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  text-align: center;
  color: #12273d;

  & h3 {
    font-size: 3rem;
  }
`;

const Services = ({}, Sref) => {
  return (
    <SectionContainer id='sec-3' ref={Sref}>
      <Content>
        <SectionTitle title='services' type='1' />
        <ServicesList>
          <Service>
            <img src='./logos/service_1.png' alt='star' />
            <h3>Car sales</h3>
            <p>
              At YourCar, we offer a wide selection of luxury vehicles for sale. Whether you're in the market
              for a sleek sports car or a spacious SUV, we have the perfect vehicle to fit your needs.
            </p>
          </Service>
          <Service>
            <img src='./logos/service_2.png' alt='hand delever key to another hand' />
            <h3>Car rental</h3>
            <p>
              If you're in need of a luxury car rental, look no further than YourCar. Our fleet of high-end
              vehicles is regularly maintained and serviced to ensure that you have a safe and comfortable
              driving experience.
            </p>
          </Service>
          <Service>
            <img src='./logos/service_3.png' alt='diamond' />
            <h3>Car selling</h3>
            <p>
              At YourCar, we make it easy to sell your car. Simply bring your vehicle in for an appraisal, and
              we'll handle the rest. We offer fair prices and a hassle-free selling process, so you can get
              your vehicle with minimal effort.
            </p>
          </Service>
        </ServicesList>
      </Content>
    </SectionContainer>
  );
};

export default forwardRef(Services);
