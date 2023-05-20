import SectionTitle from '../utils/SectionTitle';
import { forwardRef, useEffect, useState } from 'react';
import { SectionContainer, Container, TCards, TCard, PersonInfo, Dots } from './testimonialsStyle';
import testimonials from '../../data/testimonials.json';

const Testimonials = ({}, Tref) => {
  const [commentSelected, setCommentSelected] = useState(1);
  const navigateComments = (e) => {
    const index = e.target.id.split('-')[1];
    setCommentSelected(index);
  };

  return (
    <SectionContainer id='sec-6' ref={Tref}>
      <Container>
        <SectionTitle title='testimonials' type='3' />
        <TCards index={commentSelected}>
          {testimonials &&
            testimonials.map((testimonial, i) => (
              <TCard className='card' key={i}>
                <p className='comment'>{testimonial?.description}</p>
                <div>
                  <img src='./logos/stars.png' alt='5 stars' className='stars' />
                  <PersonInfo>
                    <h3>{testimonial.name}</h3>
                    <small>Las Vegas</small>
                  </PersonInfo>
                </div>
              </TCard>
            ))}
        </TCards>
        <Dots index={commentSelected}>
          <div className='dot' id='dot-1' onClick={navigateComments}></div>
          <div className='dot' id='dot-2' onClick={navigateComments}></div>
          <div className='dot' id='dot-3' onClick={navigateComments}></div>
          <div className='dot' id='dot-4' onClick={navigateComments}></div>
        </Dots>
      </Container>
    </SectionContainer>
  );
};

export default forwardRef(Testimonials);
