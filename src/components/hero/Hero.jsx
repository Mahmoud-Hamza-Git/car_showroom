import { ArrowUpRightIcon, TrashIcon } from '@heroicons/react/24/solid';
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
    data = carsCtx.cars
      .map((car, i) => {
        if (car.count > 0) {
          return { car, index: i };
        }
      })
      .filter((item) => item);
    console.log(data);
  }

  const incCount = (index) => {
    carsCtx.setCars((prev) => {
      prev[index].count++;
      localStorage.setItem('cars', JSON.stringify(prev));
      return [...prev];
    });
  };

  const decCount = (index) => {
    carsCtx.setCars((prev) => {
      prev[index].count > 0 && prev[index].count--;

      localStorage.setItem('cars', JSON.stringify(prev));
      return [...prev];
    });
  };

  const deleteItem = (index) => {
    carsCtx.setCars((prev) => {
      prev[index].count = 0;
      localStorage.setItem('cars', JSON.stringify(prev));
      return [...prev];
    });
  };

  const deleteAll = () => {
    carsCtx.setCars((prev) => {
      prev = prev.map((car) => {
        car.count = 0;
        return car;
      });
      return prev;
    });
  };

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
              data.map((item, i) => (
                <CartItem key={i}>
                  <CartContent>
                    <h2>{item.car.class}</h2>
                    <p>{item.car.name}</p>
                    <CartButtons>
                      <button className='dec' onClick={() => decCount(item.index)}>
                        -
                      </button>
                      <span className='count'>{item.car.count}</span>
                      <button className='inc' onClick={() => incCount(item.index)}>
                        +
                      </button>
                      <FontAwesomeIcon
                        icon={faTrash}
                        className='faTrash'
                        onClick={() => deleteItem(item.index)}
                      />
                    </CartButtons>
                  </CartContent>
                  <img src={item.car.img} alt='car' className='cartImg' />
                </CartItem>
              ))
            )}
          </CartItems>
          <BtnContainer>
            <DeleteBtn onClick={deleteAll}>
              Delete All <FontAwesomeIcon icon={faTrash} className='faTrash'></FontAwesomeIcon>
            </DeleteBtn>
          </BtnContainer>
        </CartList>
      </ContentContainer>
    </SecContainer>
  );
};

export default forwardRef(Hero);
