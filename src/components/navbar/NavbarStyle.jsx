import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: center;
  padding: 0 8%;
  z-index: 2;
  position: ${({ scrolled }) => (scrolled ? 'fixed' : 'absolute')};
  color: ${({ scrolled }) => (scrolled ? '#12273D' : '#fff')};
  background-color: ${({ scrolled }) => (scrolled ? '#fff' : 'transparent')};
  ${({ scrolled }) => scrolled && `& .scrolled.open{color:#000};`}
`;

export const Content = styled.div`
  width: 100%;
  &.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.8rem 0rem;
  }
`;

export const Nav_List = styled.ul`
  list-style: none;
  display: flex;
  gap: 3rem;
  font-size: 2.5rem;
  font-family: 'Roboto', sans-serif;
  display: flex;
  align-items: center;

  & li {
    padding: 5px 10px;
    transition: all 300ms;
    cursor: pointer;
  }

  & li:nth-child(${({ active }) => active}) {
    background-color: #741906;
    border-radius: 10px;
    color: #fff;
  }

  & li:hover:not(:nth-child(${({ active }) => active})):not(:last-child) {
    box-shadow: inset 0px 0px 0px 3px #ddd;
    border-radius: 10px;
    background-color: #990b0b25;
  }
  .small {
    display: flex;
  }
  .small small {
    display: none;
  }
  .open {
    display: none;
  }
  @media screen and (max-width: 820px) {
    & .open {
      display: block;
      position: absolute;
      top: -1rem;
      right: 15%;
      font-size: 3rem;
      width: 3rem;
      height: 3rem;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      padding: 2rem;
    }

    ${({ nav }) =>
      !nav && `.small {transform: translateX(200%)}; & .open{display:block}; .small .close{display:none}; `}
    ${({ nav }) => nav && `& .open{display:none}; .small .close{display:block};`}

   
    .small {
      position: absolute;
      right: 0;
      top: 7rem;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      padding-top: 10rem;
      gap: 4rem;
      width: 40%;
      height: 100vh;
      background-color: #000000d7;
      color: #fff;
    }
    .small small {
      display: block;
      font-size: 3rem;
      width: 5rem;
      height: 5rem;
      text-align: center;
      color: #fff;
      /* padding: 2rem; */
      border-radius: 5px;
      border: 1px solid #fff;
      cursor: pointer;
      position: absolute;
      top: 3rem;
      right: 3rem;
    }
    .small li {
      width: 100%;
      text-align: center;
    }
  }
`;

// const func = (props) => {
//   props.color == 'red' ? 'red' : 'blue';
// };

export const Logo = styled.span`
  font-size: 4rem;
  cursor: default;
  & strong {
    font-weight: 900;
  }
`;

export const Cart = styled.li`
  position: relative;
  font-size: 3.5rem;
  & .cart-count {
    position: absolute;
    width: 2rem;
    height: 2rem;
    align-items: center;
    top: -0.2rem;
    right: -1rem;
    font-size: 1.5rem;
    padding: 5px;
    background-color: #e9fb75;
    color: #000;
    border-radius: 5px;
    display: ${({ num }) => (num > 0 ? 'flex' : 'none')};
  }
`;
