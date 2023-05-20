import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import { SecContainer, ContentContainer, Content, CartList, EmptyMsg } from './heroStyle';
import { CartItems, CartItem, CartContent, CartButtons, DeleteBtn, BtnContainer } from './heroStyle';
import React, { forwardRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const Hero = ({ open }, Href) => {
  open = open ? 1 : 0;
  let data = '';
  if (open) {
    const cartData = localStorage.getItem('cart');
    data = JSON.parse(cartData);
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
            {/* <CartItem>
              <CartContent>
                <h2>SUV</h2>
                <p>Mercides M class</p>
                <CartButtons>
                  <button className='dec'>-</button>
                  <span className='count'>7</span>
                  <button className='inc'>+</button>
                  <FontAwesomeIcon icon={faTrash} className='faTrash'></FontAwesomeIcon>
                </CartButtons>
              </CartContent>
              <img src='./images/cars1.png' alt='car' className='cartImg' />
            </CartItem> */}
            {!data ? (
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
