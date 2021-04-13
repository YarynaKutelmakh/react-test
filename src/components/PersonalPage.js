import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './PersonalPage.css'

export default function PersonalPage(props) {

    const [aboutPerson, setAboutPerson] = useState({});
    const [episodes, setEpisodes] = useState([]);

    const { id } = props.match.params;

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
            .then(response => setAboutPerson(response.data))
    }, [id])

    useEffect(() => {
        if (aboutPerson.episode) {
            async function fetchEpisode(arr) {
                const episodes = await axios.all(arr).then(axios.spread((...responses) => {
                    return responses.map(item => {
                        return { name: item.data.name, episode: item.data.episode }
                    })
                })).catch((_) => console.log('ERROR'))
                setEpisodes(episodes)
            }
            const arr = aboutPerson.episode.map((item) => {
                return (
                    axios.get(item)
                )
            })
            fetchEpisode(arr)
        }
    }, [aboutPerson])

    return (
        <div className='personalPage'>
            <img alr='post' src={aboutPerson.image} className='personImg' />
            <h2 className='personalName'>Name: {aboutPerson.name}</h2>
            <p className='personalText'><b>Status:</b> {aboutPerson.status}</p>
            <p className='personalText'><b>Species:</b> {aboutPerson.species}</p>
            {episodes.map((item, id) => {
                return <p className='listOfEpisodes' key={id}><span className='name'><b>Name:</b> {item.name}</span>
                    <span className='episode'><b>Episode:</b> {item.episode}</span><br /></p>
            })}
        </div>
    )
}