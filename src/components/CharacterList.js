import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';
import FilterCharacters from './FilterCharacters';
import './Character.css';

export default function CharacterList() {
    const [CharacterList, GetCharacterList] = useState([]);

    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);

    const handleClick = (e) => {
        setcurrentPage(Number(e.target.id));
    }

    const pages = [];
    for (let i = 1; i <= Math.ceil(CharacterList.length / itemsPerPage); i++) {
        pages.push(i);
    }

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = CharacterList.slice(indexOfFirstItem, indexOfLastItem);

    const renderPageNumbers = pages.map(number => {
        return (
            <li key={number} id={number} onClick={handleClick}>
                {number}
            </li>
        )
    })

    const renderList = (CharacterList) => {
        return (
            <div className="character-list">
                {CharacterList.map((props, id) => {
                    return <CharacterCard key={id}  {...props} />;
                })}
            </div>
        );
    };

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character/")
            .then(response => GetCharacterList(response.data.results))
    }, []);

    const setFilterChars = (arr) => {
        GetCharacterList(arr)
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