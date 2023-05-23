import { styled } from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 8%;
  background-color: #12273d;
`;
export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const TCards = styled.div`
  display: flex;
  justify-content: center;

  .card:nth-child(${({ index }) => index}) {
    display: flex;
    justify-content: space-between;
  }
`;

export const TCard = styled.div`
  width: 60%;
  height: 40rem;
  display: none;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  padding: 3rem 0;
  text-align: center;
  background-color: #fff;
  .comment {
    font-size: 2.3rem;
    width: 75%;
  }
  & .stars {
    width: 20rem;
    margin-bottom: 1.5rem;
  }
  @media screen and (max-width: 740px) {
    height: 50rem;
  }
  
`;
export const PersonInfo = styled.div`
  display: flex;
  gap: 3rem;
  align-items: center;
  h3 {
    font-size: 3rem;
    color: #000;
  }
  small {
    font-size: 2rem;
    color: #808080b5;
  }
`;

export const Dots = styled.div`
  display: flex;
  gap: 2rem;
  .dot {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background-color: #fff;
    cursor: pointer;
  }
  .dot:nth-child(${({ index }) => index}) {
    background-color: #ebd8b8;
  }
`;
