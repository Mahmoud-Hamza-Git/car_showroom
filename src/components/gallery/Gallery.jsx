import React, { forwardRef } from 'react';
import { styled } from 'styled-components';

const GContainer = styled.div`
  margin-bottom: -1px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  & img {
    margin-bottom: -4px;
    width: 100%;
    height: 30rem;
  }
  & .item {
    position: relative;
  }
  & .item:hover .overlay {
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  color: #eee;
  z-index: 1;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  transition: all 0.6s;
  display: flex;
  opacity: 0;
  & h2 {
    font-size: 3rem;
  }
  & p {
    font-size: 1.7rem;
    color: #ddd;
  }
  & button {
    padding: 1rem 3rem;
    border: 2px solid #eee;
    border-radius: 5px;
    color: #eee;
    background-color: transparent;
    font-size: 1.5rem;
    font-weight: 700;
    transition: all 400ms;
    cursor: pointer;
  }
  & button:hover {
    background-color: #eee;
    color: #000;
  }
`;

const Gallery = ({}, Gref) => {
  return (
    <GContainer id='sec-5' ref={Gref}>
      <div className='item'>
        <img src='./images/GCar1.png' alt='tesla car' />
        <Overlay className='overlay'>
          <h2>Tesla Model</h2>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <button>Contact</button>
        </Overlay>
      </div>
      <div className='item'>
        <img src='./images/GCar2.png' alt='tesla car' />
        <Overlay className='overlay'>
          <h2>Tesla Model</h2>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <button>Contact</button>
        </Overlay>
      </div>
      <div className='item'>
        <img src='./images/GCar3.png' alt='tesla car' />
        <Overlay className='overlay'>
          <h2>Tesla Model</h2>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <button>Contact</button>
        </Overlay>
      </div>
      <div className='item'>
        <img src='./images/GCar4.png' alt='tesla car' />
        <Overlay className='overlay'>
          <h2>Tesla Model</h2>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <button>Contact</button>
        </Overlay>
      </div>
      <div className='item'>
        <img src='./images/GCar5.png' alt='tesla car' />
        <Overlay className='overlay'>
          <h2>Tesla Model</h2>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <button>Contact</button>
        </Overlay>
      </div>
      <div className='item'>
        <img src='./images/GCar6.png' alt='tesla car' />
        <Overlay className='overlay'>
          <h2>Tesla Model</h2>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <button>Contact</button>
        </Overlay>
      </div>
      <div className='item'>
        <img src='./images/GCar7.png' alt='tesla car' />
        <Overlay className='overlay'>
          <h2>Tesla Model</h2>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <button>Contact</button>
        </Overlay>
      </div>
      <div className='item'>
        <img src='./images/GCar8.png' alt='tesla car' />
        <Overlay className='overlay'>
          <h2>Tesla Model</h2>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <button>Contact</button>
        </Overlay>
      </div>
      <div className='item'>
        <img src='./images/GCar9.png' alt='tesla car' />
        <Overlay className='overlay'>
          <h2>Tesla Model</h2>
          <p>Disruptive, avant-garde, futuristic, innovative.</p>
          <button>Contact</button>
        </Overlay>
      </div>
    </GContainer>
  );
};

export default forwardRef(Gallery);
