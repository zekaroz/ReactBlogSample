import {FETCH_POSTS} from '../actions/index';


/*
This is the place where we should define our intents for the state for
our reducer
*/
const INITIAL_STATE = {
    all : [] // all blog posts
    ,post: null // single post idicating the current post loaded
  };

export default function(state = INITIAL_STATE, action){
    switch (action.type) {
      case FETCH_POSTS:
      /*check the action creator*/
      return {...state, all: action.payload.data }
      default:
        return state;
    }
}
