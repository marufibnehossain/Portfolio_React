import React from 'react';
import Banner from '../Banner';
import Drawer from '../Shared/Drawer';
import Navbar from '../Shared/Navbar';

const Home = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <Navbar setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <Banner />
    </div>
  )
}

export default Home;
