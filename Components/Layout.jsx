import React from 'react';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <div>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layout;