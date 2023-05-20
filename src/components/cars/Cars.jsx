import SectionContainer from '../utils/SectionContainer';
import SectionTitle from '../utils/SectionTitle';
import { ArrowSmallLeftIcon, ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import { Cards, Content, Card, CarFeatures, CarTitle } from './carsStyle';
import { ArrowBtn, FContent, FControllers, Navigators } from './carsStyle';
import { forwardRef, useState } from 'react';
import cars from '../../data/cars.json';

const Cars = ({}, Cref) => {
  const [sliderIndex, setSliderIndex] = useState(2);
  const [carsCounts, setCarsCounts] = useState(
    JSON.parse(localStorage.getItem('carscounts')) || Array(cars.length).fill(0)
  );
  const slidingRight = (e) => {
    setSliderIndex((prev) => {
      return prev == 1 ? 1 : prev - 1;
    });
  };

  const slidingLeft = (e) => {
    const max = cars.length;
    setSliderIndex((prev) => {
      return prev == max ? max : prev + 1;
    });
  };

  const incCount = (e) => {
    const index = e.target.dataset.value;
    setCarsCounts((prev) => {
      prev[index]++;
      localStorage.setItem('carscounts', JSON.stringify(prev));
      return [...prev];
    });
  };

  const decCount = (e) => {
    const index = e.target.dataset.value;
    setCarsCounts((prev) => {
      prev[index]--;
      localStorage.setItem('carscounts', JSON.stringify(prev));
      return [...prev];
    });
  };

  const sliding = (e) => {
    setSliderIndex(+e.target.id.split('-')[1] + 1);
  };
  return (
    <SectionContainer id='sec-4' ref={Cref}>
      <Content>
        <SectionTitle type='2' title='cars' />
        <Cards index={sliderIndex}>
          {cars.length > 0 &&
            cars.map((car, i) => (
              <Card key={i} className='card'>
                <img src={car.image} alt='car' className='carImg' />
                <CarTitle>
                  <h3>{car.class}s</h3>
                  <p>{car.name}</p>
                </CarTitle>
                <p className='desc'>{car.description}</p>
                <CarFeatures>
                  <FContent>
                    <div className='item'>
                      <img src='./logos/peopleIcon.png' alt='icon' className='icon' />
                      <p>{car.seats} Seats</p>
                    </div>
                    <div className='item'>
                      <img src='./logos/vectorIcon.png' alt='icon' className='icon' />
                      <p>{car.luggage} Luggage</p>
                    </div>
                  </FContent>
                  <FControllers>
                    <button className='fControllerBtn dec' data-value={i} onClick={decCount}>
                      -
                    </button>
                    <span className='num'>{carsCounts[i]}</span>
                    <button className='fControllerBtn inc' data-value={i} onClick={incCount}>
                      +
                    </button>
                  </FControllers>
                </CarFeatures>
              </Card>
            ))}
        </Cards>
        <ArrowBtn className='r' onClick={slidingRight}>
          <ArrowSmallRightIcon className='arrow' />
        </ArrowBtn>
        <ArrowBtn className='l' onClick={slidingLeft}>
          <ArrowSmallLeftIcon className='arrow' />
        </ArrowBtn>
        <Navigators index={sliderIndex}>
          {cars.length > 0 &&
            cars.map((car, i) => <div className='dot' id={`dot-${i}`} onClick={sliding} key={i}></div>)}
        </Navigators>
      </Content>
    </SectionContainer>
  );
};

export default forwardRef(Cars);
/*
name
calss
count
img
*/
