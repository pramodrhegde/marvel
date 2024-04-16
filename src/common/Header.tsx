import React from 'react';
import './Header.css';
import SearchBox from './SearchBox';
import imageSrc from '/public/images/logo.svg';

const Header = () => {

    return <header>
        <div className='container flex-row'>
            <img src={imageSrc} alt="marvel logo" />
            <SearchBox />
        </div>
    </header>
}

export default Header;