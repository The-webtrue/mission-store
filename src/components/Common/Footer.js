import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <nav className='d-flex justify-content-between align-items-center'>
                    <div className='nav nav-pills'>
                        <Link to='/' className=''>Home</Link>
                        <Link to='about' className=''>About</Link>
                        <Link to='products' className=''>Products</Link>
                        <Link to='post' className=''>Posts</Link>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;