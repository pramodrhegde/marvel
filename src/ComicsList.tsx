import React, { SyntheticEvent, useContext, useEffect, useState } from 'react'
import "./main.css";
import {AppStateContext} from './ContextProvider';
import {
    useQuery, useQueryClient
  } from '@tanstack/react-query';

import {fetchComics} from './api/apiService';
import PaginationControls from './PaginationControls';

const ComicsList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { selectedCharacters } = useContext(AppStateContext);
    const { searchQuery } = useContext(AppStateContext);
    const queryClient = useQueryClient();
    const { isLoading, isError, data }: any = useQuery({ queryKey: ['comicsList'], queryFn: () => fetchComics(currentPage, selectedCharacters.map((item: any) => item.id), searchQuery)});

    const handleComicClick = (e: SyntheticEvent, comic: Object) => {
        console.log(comic);
    }

    useEffect(() => {
        queryClient.invalidateQueries({ queryKey: ['comicsList'] });
    }, [selectedCharacters, searchQuery, currentPage]);

    return <div className='comics-list-wrapper'>
        <div className='container flex-row flex-wrap'>
            {isLoading ? <>Loading...</> : null}
            {isError ? <>Error</> : null}
            { data && data.data.results && data.data.results.map((comic: any) => <a className='comic-card-link' href={comic.urls.length ? `${comic.urls[0].url}`: '#'} target="_blank" rel="noopener noreferrer"><div className='comic-card' key={comic.id} onClick={(e) => handleComicClick(e, comic)}><img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}/>
            <div className='footer'>{comic.title}</div></div></a>)}
            { data && data.data && <PaginationControls currentPage={currentPage} totalPages={Math.ceil(data.data.total / 20) || 0} onPageChange={pageNumber => setCurrentPage(pageNumber)} />}
        </div>
    </div>
}

export default ComicsList;