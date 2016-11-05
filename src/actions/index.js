import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=zekaroz'; // this is a random key to be unique to the world;

// action creator to fetch the blog posts
export function fetchPosts(){
  const request = axios.get(ROOT_URL + '/posts' + API_KEY);

  return  {
    type: FETCH_POSTS,
    payload: request
  }; // this object is an action

}


export function createPost(props){// this is the form content
    const request = axios.post(ROOT_URL + '/posts' + API_KEY, props);

    return {
      type: CREATE_POST,
      payload: request
    }
}
