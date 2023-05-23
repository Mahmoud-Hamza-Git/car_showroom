import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { SecContainer, ContentContainer, Content, CartList, EmptyMsg } from './heroStyle';
import { CartItems, CartItem, CartContent, CartButtons, DeleteBtn, BtnContainer } from './heroStyle';
import React, { forwardRef, useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CarsContext } from '../../context/CarsContext';

const Hero = ({ open }, Href) => {
  const carsCtx = useContext(CarsContext);

  open = open ? 1 : 0;
  let data = [];
  if (open) {
    data = carsCtx.cars.filter((car) => car.count > 0);
  }
  return (
    <SecContainer id='sec-1' ref={Href}>
      <ContentContainer>
        <Content>
          <h1>Find the perfect car for you at YourCar.</h1>
          <p>
            We offer a wid range of cars that cater to your needs and budget. Visit us today and drive away
            with your dream car!
          </p>
          <button>
            Discover
            <ArrowUpRightIcon className='arrow' />
          </button>
        </Content>
        <CartList open={open}>
          <CartItems>
            {data.length == 0 ? (
              <EmptyMsg>Cart is Empty 😮</EmptyMsg>
            ) : (
              data.map((car) => (
                <CartItem>
                  <CartContent>
                    <h2>{car.class}</h2>
                    <p>{car.name}</p>
                    <CartButtons>
                      <button className='dec'>-</button>
                      <span className='count'>{car.count}</span>
                      <button className='inc'>+</button>
                      <FontAwesomeIcon icon={faTrash} className='faTrash'></FontAwesomeIcon>
                    </CartButtons>
                  </CartContent>
                  <img src={car.img} alt='car' className='cartImg' />
                </CartItem>
              ))
            )}
          </CartItems>
          <BtnContainer>
            <DeleteBtn>
              Delete All <FontAwesomeIcon icon={faTrash} className='faTrash'></FontAwesomeIcon>
            </DeleteBtn>
          </BtnContainer>
        </CartList>
      </ContentContainer>
    </SecContainer>
  );
};

export default forwardRef(Hero);
