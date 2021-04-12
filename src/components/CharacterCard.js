import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";

export default function CharacterCard({ name, image, status, species, location, gender, id }) {
    const history = useHistory();
    const PersonalPages = () => {
        history.push(`/character/${id}`);
    }
    return (
        <div className='card' onClick={PersonalPages}>
            <img src={image} />
            <div>
                <h2>{name}</h2>
                <p className='status'>{status} - {species}</p>
                <p>Last known location: <br /> {location.name}</p>
                <p>Gender: {gender}</p>
            </div>
        </div>
    )
}