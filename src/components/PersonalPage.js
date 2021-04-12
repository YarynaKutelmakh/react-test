import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PersonalPage.css'

export default function PersonalPage(props) {

    const [AboutPerson, GetAboutPerson] = useState({});
    const [Episodes, GetEpisodes] = useState([]);

    const { id } = props.match.params;

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => GetAboutPerson(response.data))
    }, [])

    useEffect(() => {
        if (AboutPerson.episode) {
            const arr = AboutPerson.episode.map((item) => {
                return (
                    axios.get(item)
                )
            })
            axios.all(arr).then(axios.spread((...responses) => {
                responses.map(item => GetEpisodes(item.data.episode))
            })).catch(errors => console.log('ERROR'))
        }
    }, [AboutPerson])

    return (
        <div className='personalPage'>
            <img src={AboutPerson.image} className='personImg' />
            <h2>Name: {AboutPerson.name}</h2>
            <p>Status: {AboutPerson.status} </p>
            <p>Species: {AboutPerson.species}</p>
            <p>Episode: {Episodes}</p>
        </div>
    )
}