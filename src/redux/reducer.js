import posts from "../data/posts";
import { combineReducers } from "redux";

const commentReducer = (state={},action) => {
    switch(action.type){
        case 'ADD_COMMENT':
            if(!state[action.postId]){
                return {...state,[action.postId]:[action.payload]}
            }else{
                return {...state,[action.postId]:[...state[action.postId],action.payload]}
            }
        case 'REMOVE_COMMENT':
            if(state[action.payload]){
                delete state[action.payload]
            }
            return state
        case 'LOAD_COMMENTS':
            return action.payload
        default:
            return state
    }
}

const postReducer = (state = posts,action) => {
    // console.log(state);
    switch(action.type){
        case 'REMOVE_POST':
            const updatedState = state.filter(post => post.id !== action.payload)
            return updatedState
            // return [...state.slice(0,action.payload),...state.slice(action.payload+1)]
        case 'ADD_POST':
            return [...state,action.payload]
        case 'LOAD_POSTS':
            return action.payload
        default:
            return state
    }
}

const rootReducer = combineReducers({posts:postReducer,comments:commentReducer})

export default rootReducer;