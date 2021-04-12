import React, { useState, useRef } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { createPost } from './store/actions';
import Publications from './Publications';

import './Posts.css';

function AddPost() {
    const posts = useSelector((state) => state.posts);
    const dispatch = useDispatch();
    const formRef = useRef(null);

    const [imgLink, setImgLink] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');

    const createNewPost = (e) => {
        const newPost = {
            name: name,
            email: email,
            image: imgLink,
            gender: gender
        };
        e.preventDefault();
        e.target.reset();

        dispatch(createPost(newPost));

        setImgLink('');
        setName('');
        setEmail('');
        setGender('');
    }

    return (
        <div className='OwnCharacters'>
            <form className='form' ref={formRef} onSubmit={createNewPost}>
                <input type='text' placeholder='Name' onChange={(e) => setName(e.target.value)} />
                <input type='email' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                <div>
                    <input type="radio" value='male' name="gender" onChange={(e) => setGender(e.target.value)} />
                    <label className='inputGender'>Male</label>
                    <input type="radio" value='female' name="gender" onChange={(e) => setGender(e.target.value)} />
                    <label className='inputGender'>Female</label>
                    <input type="radio" value='unknown' name="gender" onChange={(e) => setGender(e.target.value)} />
                    <label className='inputGender'>Unknown</label>
                </div>
                <input type='text' placeholder='URL' onChange={(e) => setImgLink(e.target.value)} />
                <button type='submit' className='btnNewPost'>Add Person</button>
            </form>
            <Publications />
        </div>
    );
}

export default connect(null, { createPost })(AddPost);

