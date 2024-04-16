import React, {useContext} from 'react';
import {AppStateContext} from './ContextProvider';

const FiltersBox = () => {
    const { selectedCharacters, setSelectedCharacters } = useContext(AppStateContext);

    return <div className='container flex-row'>
        <div>{ selectedCharacters.map((item: any, index: number) => <span key={item.id}>{item.name}{index === selectedCharacters.length - 1? '' : ', '}</span>)}</div>
        {selectedCharacters.length? <button className='btn' onClick={() => setSelectedCharacters([])}>Clear all filters</button> : null}
    </div>
}

export default FiltersBox;