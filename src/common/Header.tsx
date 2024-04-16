import React from 'react';
import './Header.css';
import SearchBox from './SearchBox';

const Header = () => {

    return <header>
        <div className='container flex-row'>
            <img src="/images/logo.svg" alt="marvel logo" />
            <SearchBox />
        </div>
    </header>
}

export default Header;