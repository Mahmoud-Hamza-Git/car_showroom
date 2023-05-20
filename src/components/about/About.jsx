import { styled } from 'styled-components';
import SectionContainer from '../utils/SectionContainer';
import { forwardRef } from 'react';

const Content = styled.div`
  display: flex;
  gap: 8rem;
  height: 80rem;
`;
const Images = styled.div`
  flex: 2;
  height: 100%;
  position: relative;
  & .carImg {
    position: absolute;
    left: 15%;
    top: 10%;
    width: 100%;
  }
`;
const Text = styled.div`
  flex: 3;
  font-size: 2rem;
  line-height: 1.5;
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const Title = styled.div`
  position: relative;
  & .main-title {
    color: #7d0505;
    font-size: 4rem;
    font-weight: 900;
    position: absolute;
    bottom: 3px;
    z-index: 1;
  }

  & .shadow {
    font-size: 10rem;
    font-weight: 900;
    color: #dddddda1;
    position: relative;
    left: -1.5rem;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const About = ({}, Aref) => {
  return (
    <SectionContainer id='sec-2' ref={Aref}>
      <Content>
        <Text>
          <Title sec='type1' align='start'>
            <p className='shadow'>ABOUT US</p>
            <h2 className='main-title'>About</h2>
          </Title>
          <Description>
            <p>
              YourCar is a luxury car dealership that offers a personalized and first-class experience to its
              clients. Our team of experienced professionals is dedicated to providing exceptional service and
              finding the perfect vehicle to match our clients' unique preferences and requirements. We have
              an extensive selection of high-end vehicles, ranging from sports cars to SUVs, all of which are
              maintained to the highest standards of quality and safety.
            </p>
            <p>
              At YourCar, we are committed to creating a stress-free and enjoyable car buying experience. We
              understand that purchasing a luxury car can be a significant investment, which is why we offer
              flexible financing options to make the process more manageable. Our team is available to answer
              any questions and provide guidance throughout the entire buying process. We take pride in our
              outstanding customer service and attention to detail, and we are confident that our clients will
              be satisfied with their experience at YourCar.
            </p>
          </Description>
        </Text>
        <Images>
          <img src='./images/aboutFloor.png' alt='floor img' className='floorImg' />
          <img src='./images/aboutCar.png' alt='car img' className='carImg' />
        </Images>
      </Content>
    </SectionContainer>
  );
};

export default forwardRef(About);
