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
    for (let i = 1; i <= Math.ceil(40/12); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = characterList;

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
        axios.get(`https://rickandmortyapi.com/api/character/[${Array(12).fill(0).map((e,i)=>i+indexOfFirstItem + 1).join(',')}]`)
            .then(response => setCharacterList(response.data))
            .catch((_) => console.log('ERROR'))
    }, [indexOfFirstItem]);

    const setFilterChars = (arr) => {
        setCharacterList(arr)
    }

    return (
        <div>
            <div className='main'>
                <FilterCharacters setFilterChars={setFilterChars} />
                {renderList(currentItems)}
            </div>
            <ul className='pageNumbers'>
                {renderPageNumbers}
            </ul>
        </div>
    )

}