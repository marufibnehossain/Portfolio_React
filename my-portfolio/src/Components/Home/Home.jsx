import React from 'react';
import Aboutme from '../Aboutme';
import Banner from '../Banner';
import Brands from '../Brands';
import Drawer from '../Shared/Drawer';
import Navbar from '../Shared/Navbar';
import Skills from '../Skills';

const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <Navbar setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <Banner />
      <Brands />
      <Aboutme />
      <Skills />
    </div>
  )
}

export default Home;
