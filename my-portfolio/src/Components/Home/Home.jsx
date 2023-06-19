import React from 'react';
import Aboutme from '../LargeComponents/Aboutme';
import Banner from '../LargeComponents/Banner';
import Brands from '../LargeComponents/Brands';
// import Drawer from '../Shared/Drawer';
// import Navbar from '../Shared/Navbar';
import Projects from '../LargeComponents/Projects';

const Home = () => {
  // const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      {/* <Navbar setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} /> */}
      <Banner />
      <Brands />
      <Aboutme />
      <Projects />
    </div>
  )
}

export default Home;
