import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

interface SidebarLayoutProps {
  children?: ReactNode;
}

const SidebarLayout: FC<SidebarLayoutProps> = () => {
  return (
    <>
        <div className='sidebar-layout'>
            <div className='sidebar-section'>
                <div className='sidebar'>
                    <Sidebar></Sidebar>
                </div>
                <div className='main-content'>
                    <Header/>
                    <Outlet />
                </div>
            </div>
            <div className='footer-section'>
                <Footer/>
            </div>
        </div>
    </>
  );
};

export default SidebarLayout;