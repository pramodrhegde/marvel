import React, { SyntheticEvent, useContext, useState, useEffect } from 'react'
import "./main.css";
import {AppStateContext} from './ContextProvider';
import {
    useQuery, useQueryClient
  } from '@tanstack/react-query';
  import {fetchCharacters} from './api/apiService';

const CharactersGallery = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const { selectedCharacters, setSelectedCharacters } = useContext(AppStateContext);
    // can be optimized to cache prev data
    const { isLoading, isError, data }: any = useQuery({ queryKey: ['charactersList'], 
    queryFn: () => fetchCharacters(pageNumber)});
    const queryClient = useQueryClient();

    const handleCharacterClick = (e: SyntheticEvent, character: any) => {
        console.log(character);
        const index = selectedCharacters.map((item: any) => item.id).indexOf(character.id);
        if (index === -1) {
            setSelectedCharacters([...selectedCharacters, character]);
        } else {
            setSelectedCharacters(selectedCharacters.filter((item: any) => item.id !== character.id));
        }
    }

    useEffect(() => {
        queryClient.invalidateQueries({ queryKey: ['charactersList'] });
    }, [pageNumber]);
  return (
    <div className="characters-gallery-wrapper">
        <div className='container flex-row'>
            {isLoading ? <>Loading...</> : null}
            {isError ? <>Error</> : null}
            { data && data.data.results && data.data.results.map((character: any) => <img className={`character-circle ${selectedCharacters.map((item: any) => item.id).includes(character.id) ? 'active' : ''}`} key={character.id} 
            onClick={(e) => handleCharacterClick(e, character)} src={`${character.thumbnail.path}.${character.thumbnail.extension}`}/>)}

            <span className='character-nav left' onClick={() => setPageNumber(prevPage => prevPage === 1 ? 1 : prevPage - 1)}> &lt; </span>
            <span className='character-nav right' onClick={() => setPageNumber(prevPage => prevPage + 1)}> &gt; </span>
        </div>
    </div>
  )
}

export default CharactersGallery;