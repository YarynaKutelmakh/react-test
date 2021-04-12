import { connect } from 'react-redux';
import { createPost } from './store/actions';

function OwnCharacters() {

    const createNewPost = () => {  
    }
    
    return (
        <div >
            <form action=''>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
                <input type="radio" name="gender" />
                <label>Male</label>
                <input type="radio" name="gender" />
                <label>Female</label>
                <input type="radio" name="gender" />
                <label>Unknown</label>
                <input type='text' placeholder='URL' />
                <button onClick={createNewPost}>Add Person</button>
            </form>
        </div>
    );
}

export default connect(null, { createPost })(OwnCharacters);

