import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className='container'>
            <div className='d-flex justify-content-between align-items-center'>
                <div className='logo'>
                    <Link to='/' className='brand'>MISSION</Link>
                </div>

                <div className='nav nav-pills'>
                    <Link to='/' className=''>Home</Link>
                    <Link to='about' className=''>About</Link>
                    <Link to='products' className=''>Products</Link>
                    <Link to='post' className=''>Posts</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;