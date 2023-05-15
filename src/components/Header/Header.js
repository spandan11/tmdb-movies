import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="header__left">
                    <Link to="/" className='header__link'> <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="Header_Logo" className='header__logo' /></Link>
                    <Link to="/movies/popular" className='header__link'> <span>Popular</span> </Link>
                    <Link to="/movies/top_rated" className='header__link'> <span>Top Rated</span> </Link>
                    <Link to="/movies/upcoming" className='header__link'> <span>Upcoming</span> </Link>
                </div>
            </div>
        </>
    );
};

export default Header;