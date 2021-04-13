import React, { useState } from 'react';
import axios from 'axios';
import './FilterCharacters.css'

const gerders = [
  {
    label: "Female",
    value: "female",
  },
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Genderless",
    value: "genderless",
  },
  {
    label: "Unknown",
    value: "unknown",
  }
];

const statuses = [
  {
    label: "Alive",
    value: "alive",
  },
  {
    label: "Dead",
    value: "dead",
  },

  {
    label: "Unknown",
    value: "unknown",
  }
];

export default function FilterCharacters({setFilterChars}) {
  const [gender, setGender] = useState('female');
  const [status, setStatus] = useState('alive');

  const genderChange = (e) => {
    setGender(e.target.value);
  }
  const statusChange = (e) => {
    setStatus(e.target.value);
  }

  const filterCharacters = () => {
    axios.get(`https://rickandmortyapi.com/api/character/?status=${status}&gender=${gender}`)
      .then(response => setFilterChars(response.data.results))
  }

  return (
    <div className="select-container">
      <select value={gender} onChange={genderChange} className='select'>
        {gerders.map((option, item) => (
          <option value={option.value} key={item}>{option.label}</option>
        ))}
      </select>
      <select value={status} onChange={statusChange}className='select'>
        {statuses.map((option, item) => (
          <option value={option.value} key={item}>{option.label}</option>
        ))}
      </select>
      <button onClick={filterCharacters} className='filterBtn'>Filter</button>
    </div>
  );
}