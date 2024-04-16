import React from 'react'
import "./main.css";
import Header from './common/Header';
import CharactersGallery from './CharactersGallery';
import ComicsList from './ComicsList';
import FiltersBox from './FiltersBox';

function App() {
  return (
    <div className="app">
        <Header />
        <CharactersGallery />
        <FiltersBox />
        <ComicsList />
    </div>
  )
}

export default App