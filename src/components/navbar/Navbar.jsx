import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { Container, Content, Logo, Nav_List, Cart } from './NavbarStyle.jsx';

const Navbar = ({ scroll, leaveHome, onOpenCart }) => {
  const [activeSection, setActiveSection] = useState(1);
  const [isCartOpened, setIsCartOpened] = useState(false);

  const handleScroll = (e) => {
    setActiveSection(e.target.id);
    scroll(e.target.id);
  };

  leaveHome = leaveHome ? 1 : 0;

  const handleOpen = () => {
    setIsCartOpened((prev) => !prev);
    onOpenCart(isCartOpened);
  };

  return (
    <Container scrolled={leaveHome}>
      <Content className='nav'>
        <Logo color='red'>
          <strong>Your</strong>Car
        </Logo>
        <Nav_List active={activeSection}>
          <li id='1' onClick={handleScroll}>
            Home
          </li>
          <li id='2' onClick={handleScroll}>
            About
          </li>
          <li id='3' onClick={handleScroll}>
            Services
          </li>
          <li id='4' onClick={handleScroll}>
            Cars
          </li>
          <li id='5' onClick={handleScroll}>
            Contact Us
          </li>
          <Cart id='cart' num={5} onClick={handleOpen}>
            <FontAwesomeIcon icon={faCartPlus} />
            <span className='cart-count'>{6}</span>
          </Cart>
        </Nav_List>
      </Content>
    </Container>
  );
};

export default Navbar;
