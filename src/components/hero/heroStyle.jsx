import { styled } from 'styled-components';

export const SecContainer = styled.div`
  height: 110vh;
  min-height: 60rem;
  justify-content: center;
  padding: 0 8%;
  background: url('./images/heroCar.png');
  background-position: center;
  background-size: cover;
  @media screen and (max-width: 850px) {
    height: 90vh;
  }
  @media screen and (max-width: 520px) {
    height: 70vh;
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const Content = styled.div`
  font-size: 2rem;
  line-height: 1;
  float: right;
  width: 50rem;
  margin-top: 16rem;
  color: #fff;
  display: flex;
  align-items: end;
  flex-direction: column;
  gap: 3rem;
  text-align: right;

  & h1 {
    font-size: 5.5rem;
  }

  & p {
    color: #eee;
    width: 60%;
    line-height: 1.3;
    font-size: 2.8rem;
  }

  & button {
    padding: 1rem 2rem;
    background-color: transparent;
    color: #eee;
    border: 2px solid #fff;
    border-radius: 10px;
    font-size: 2rem;
    display: flex;
    gap: 1rem;
    align-items: center;
    transition: all 300ms;
  }

  & .arrow {
    width: 2rem;
  }

  & button:hover {
    background-color: #eee;
    color: #000;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    text-align: center;
    align-items: center;
    gap: 5rem;
    & p {
      background-color: #00000044;
      padding: 3rem;
      width: 100%;
      border-radius: 1rem;
    }
    & button {
      background-color: #000;
    }
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    text-align: center;
    align-items: center;
    gap: 5rem;
    & p {
      background-color: #00000044;
      padding: 3rem;
      width: 100%;
      border-radius: 1rem;
    }
    & button {
      background-color: #0000008c;
      border: none;
    }
  }
`;

export const CartList = styled.div`
  position: fixed;
  top: 7rem;
  right: 8%;
  width: 45rem;
  height: calc(100vh - 7rem);
  min-height: 30rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #101927f7;
  padding: 2rem 2rem 0;
  z-index: 2;
  transition: opacity ease-in-out 0.2s, transform step-end 0.1s;
  opacity: ${({ open }) => open};

  ${({ open }) => (!open ? `transform: translateX(200%);` : '')}
`;

export const CartItems = styled.div`
  height: 85%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow-y: auto;
`;

export const CartItem = styled.div`
  height: 15rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  background-color: #fff;
  padding: 1rem 1.5rem;
  img {
    width: 50%;
  }
`;
export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 1rem;
  h2 {
    font-size: 2rem;
    color: #741906;
    font-weight: 900;
  }
  p {
    font-size: 1.5rem;
    color: #232222;
  }
`;
export const CartButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  button {
    background-color: #741906;
    color: #fff;
    font-size: 2.5rem;
    width: 3.5rem;
    height: 3.5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
  }
  .inc {
    border-radius: 0 10px 10px 0;
  }
  .dec {
    border-radius: 10px 0 0 10px;
  }
  .count {
    font-size: 2.5rem;
  }
  .faTrash {
    font-size: 3rem;
    cursor: pointer;
  }
`;

export const BtnContainer = styled.div`
  height: 15%;
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeleteBtn = styled.button`
  padding: 1rem 2rem;
  border-radius: 5px;
  background-color: #741906;
  color: #fff;
  font-size: 2rem;
  border: none;
  cursor: pointer;
`;

export const EmptyMsg = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  margin-top: 3rem;
`;
