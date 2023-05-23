import React, { forwardRef } from 'react';
import SectionContainer from '../utils/SectionContainer';
import {
  ContentContainer,
  SiteDescription,
  NewsLetter,
  SubscribeContainer,
  Social,
  Contact,
  CopyRights,
} from './footerStyle';

const Footer = (props, Fref) => {
  return (
    <>
      <SectionContainer ref={Fref}>
        <ContentContainer>
          <SiteDescription className='column'>
            <h2 className='footerTitle'>
              <strong>Your</strong>Car
            </h2>
            <p className='footerText'>
              We are known for luxurious and premium chaffeur services worldwide. We are simply the best you
              can find.
            </p>
            <p className='footerText'>
              we are dedicated to providing our customers with a first-class car buying, selling, and renting
              experience.
            </p>
          </SiteDescription>
          <NewsLetter className='column'>
            <h2 className='footerTitle'>News Letter</h2>
            <p className='footerText'>Subscribe to our news letter for updates, news and exclusive offers</p>
            <SubscribeContainer>
              <input type='text' placeholder='Email' />
              <button>Subscribe</button>
            </SubscribeContainer>
            <Social>
              <img src='./logos/facebook.png' alt='facebook icon' />
              <img src='./logos/twitter.png' alt='twitter icon' />
              <img src='./logos/instagram.png' alt='instagram icon' />
            </Social>
          </NewsLetter>
          <Contact className='column'>
            <h2 className='footerTitle'>Contact</h2>
            <div className='lines'>
              <div className='line'>
                <img src='./logos/location.png' alt='location icon' />
                <p className='footerText'>2038 2nd Avenue, Las Vegas, United States</p>
              </div>
              <div className='line'>
                <img src='./logos/phone.png' alt='location icon' />
                <p className='footerText'>
                  01444773421423 <br />
                  01477678449405
                </p>
              </div>
              <div className='line'>
                <img src='./logos/email.png' alt='location icon' />
                <p className='footerText'>info@YourCar.com</p>
              </div>
            </div>
          </Contact>
        </ContentContainer>
      </SectionContainer>
      <CopyRights>
        <hr />
        <p className='footerText'>
          © Copyright 2023 · <strong>YourCar</strong> All rights reserved
        </p>
      </CopyRights>
    </>
  );
};

export default forwardRef(Footer);
