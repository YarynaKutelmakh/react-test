import React from 'react';
import './Posts.css';

const Posts = (props) => {
    return (
        <div className='post' key={props.id}>
            <div className='head-wrapper'>
                <img alt='post' src={props.image} />
                <p className='text'>{props.name}</p>
                <p className='text'>{props.email}</p>
                <p className='text'>{props.gender}</p>
            </div>
        </div>
    );
};

export default Posts;