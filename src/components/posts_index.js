import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import {Link } from 'react-router';

class PostsIndex extends Component{

  componentWillMount(){
    /*when this component is loaded then the data is fetched*/
    this.props.fetchPosts();
  }

  render(){
    return (
      <div>
        <div className="text-xs-right">
            <Link to='/posts/new' className='btn btn-primary' >
              Add a Post
            </Link>
        </div>
        <h1>New List of blog posts</h1>
        <div className="">

        </div>

      </div>
    );
  }

}

export default connect (null, { fetchPosts: fetchPosts }) (PostsIndex) ;
