const defaultState = {
    posts: []
}

export default function postReducer(state = defaultState, action) {
    switch (action.type) {
        case 'ADD_POST':
            return {
                ...state,
                posts: state.posts.concat(action.payload)
            }
        default:
            return state
    }
}