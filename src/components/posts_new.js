import React , { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';


class PostsNew extends Component{
  render(){
    //function to handle submit
    // this function is obtains via factory Function reduxForm
    const handleSubmit = this.props.handleSubmit;

    // this are full objects that can handle an input of a form
    const title = this.props.fields.title;
    const categories = this.props.fields.categories;
    const content  = this.props.fields.content;

    return (
      <form onSubmit={handleSubmit(this.props.createPost)} >
        <h3>Create a New Post</h3>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className="form-group">
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" {...content} />
        </div>
        <input type="submit" className="btn btn-primary" />
      </form>
    );
  }
}

function validate(value){
    const errors = {};

    if(!value.title){
        errors.title= 'Enter a title!';
    }

    return errors;
}

export default reduxForm({
      /*this is the configuration to redux form*/
        form: 'PostNewForm' // this is just a name
        ,fields: [
            'title',
            'categories',
            'content']
        ,validate
      },
      null, // this is the map state to props
      { createPost }  // this is like the mapDispatchToProps
)(PostsNew);
