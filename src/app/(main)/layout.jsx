import Footer from '@/components/shared/Footer';
import NavBar from '@/components/shared/NavLink/NavBar';
import React from 'react';

const MainLayOut = ({ children }) => {
    return (
        <div>
            <NavBar></NavBar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default MainLayOut;