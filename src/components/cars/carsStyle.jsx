import { styled } from 'styled-components';

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5rem;
  align-items: center;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.03);
`;

export const Cards = styled.div`
  position: relative;
  display: flex;
  gap: 3rem;
  font-size: 5rem;
  overflow: hidden;
  width: 100%;
  .card {
    transform: translateX(calc((-2 + ${({ index }) => index}) * (-100% - 3rem)));
  }
`;

export const Card = styled.div`
  min-width: calc(33.33% - 1.5rem);
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  padding: 3rem 4rem;
  box-shadow: 0 5px 3rem rgba(0, 0, 0, 0.1);
  transition: all ease 0.8s;
  & .carImg {
    width: 100%;
    height: 18rem;
  }

  & .desc {
    font-size: 1.5rem;
  }
  @media screen and (max-width: 820px) {
    min-width: calc(50% - 1.5rem);
  }
`;

export const CarTitle = styled.div`
  text-align: center;
  & h3 {
    color: #7d0505;
    text-transform: uppercase;
    font-size: 2.5rem;
    font-weight: 900;
  }
  & p {
    font-size: 1.8rem;
  }
`;
export const CarFeatures = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2rem;
`;

export const FContent = styled.div`
  display: flex;
  flex-direction: column;

  & .item {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  & .item .icon {
    width: 2.5rem;
    height: 2.5rem;
  }
  & .item p {
    color: #7d0505;
  }
`;

export const FControllers = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 3rem;
  & button {
    background-color: #7d0505;
    border: none;
    width: 4rem;
    height: 4rem;
    color: #fff;
    font-size: 3rem;
    cursor: pointer;
  }
  & .inc {
    border-radius: 0 5px 5px 0;
  }
  & .dec {
    border-radius: 5px 0 0 5px;
  }
`;

export const Navigators = styled.div`
  color: #00000077;
  display: flex;
  gap: 2rem;
  & .dot {
    width: 1.5rem;
    height: 1.5rem;
    background-color: #80808070;
    border-radius: 50%;
    cursor: pointer;
  }
  & .dot:nth-child(${({ index }) => index}) {
    background-color: #7d0505;
  }
`;
export const ArrowBtn = styled.button`
  position: absolute;
  color: #fff;
  background-color: #7d0505;
  border: none;
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  & .arrow {
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
  }

  &.r {
    right: -5rem;
    top: 50%;
    transform: translateY(-50%);
  }

  &.l {
    left: -5rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;
