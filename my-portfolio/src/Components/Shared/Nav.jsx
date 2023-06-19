import React from 'react';
import Drawer from '../Shared/Drawer';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';

const Nav = () => {
    const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <Navbar setIsOpen={setIsOpen} />
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Nav;
