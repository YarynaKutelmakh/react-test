import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CharacterCard from './CharacterCard';
import FilterCharacters from './FilterCharacters';

import './Character.css';

export default function CharacterList() {
    const [characterList, setCharacterList] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const handleClick = (e) => {
        setCurrentPage(Number(e.target.id));
    }

    const pages = [];
    for (let i = 1; i <=Math.ceil(characterList.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = characterList.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map(number => {
        return (
            <li key={number} id={number} onClick={handleClick}>
                {number}
            </li>
        )
    })

    const renderList = (characterList) => {
        return (
            <div className="character-list">
                {characterList.map((props, id) => {
                    return <CharacterCard key={id}  {...props} />;
                })}
            </div>
        );
    };

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/`)
            .then(response => setCharacterList(response.data.results))
            .catch((_) => console.log('ERROR'))
    }, []);

    const setFilterChars = (arr) => {
        setCharacterList(arr)
    }

    return (
        <div>
            <div className='main'>
                <FilterCharacters setFilterChars={setFilterChars} />
                {renderList(currentItems)}
            </div>
            <div className='pageNumbers'>
                {renderPageNumbers}
            </div>
        </div>
    )

}