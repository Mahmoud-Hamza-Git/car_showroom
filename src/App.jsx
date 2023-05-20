import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Services from './components/services sec/Services';
import Cars from './components/cars/Cars';
import Gallery from './components/gallery/Gallery';
import Testimonials from './components/testimonials/Testimonials';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

function App() {
  const Href = useRef();
  const Aref = useRef();
  const Sref = useRef();
  const Cref = useRef();
  const Gref = useRef();
  const Tref = useRef();

  // Hooks
  const { ref, inView: leaveHome } = useInView({ threshold: 0.07 });
  const [isCartOpen, setIsCartOpen] = useState(false);
  // Handlers
  const scroll = (sec) => {
    const sections = [Href, Aref, Sref, Cref, Tref];
    sections[sec - 1].current?.scrollIntoView({ behavior: 'smooth' });
  };

  const onOpen = (value) => {
    setIsCartOpen(value);
  };

  return (
    <>
      <Navbar scroll={scroll} onOpenCart={onOpen} leaveHome={leaveHome} />
      <Hero ref={Href} open={isCartOpen} />
      <div ref={ref}>
        <About ref={Aref} />
        <Services ref={Sref} />
        <Cars ref={Cref} />
        <Gallery ref={Gref} />
        <Testimonials ref={Tref} />
      </div>
    </>
  );
}

export default App;
// useEffect(() => {
//   console.log(Sref?.current, '😀');
// }, []);
