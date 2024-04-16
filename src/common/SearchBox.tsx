import React, {useContext} from 'react';
import {AppStateContext} from '../ContextProvider';

const debouncedFn = function(fn: any, delay: number) {
    let timer: any;
    return function(...args: any) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args)
        }, delay);
    }
}
const SearchBox = () => {
    const { setSearchQuery } = useContext(AppStateContext);
    const handleChange = (e: any) => {
        setSearchQuery(e.target.value);
    }

    return <div><input className='search-input' placeholder='Search for comics...' type="text" onChange={debouncedFn(handleChange, 1000)}/></div>
}

export default SearchBox;