import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Common/Footer';
import Header from '../Common/Header';

const MainLayout = () => {
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>

        </>
    );
};

export default MainLayout;