import React , { Component , PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import {Link } from 'react-router';


class PostsNew extends Component{
  static contextTypes = {
      router: PropTypes.object
  } ;

  onSubmit(props){
      this.props.createPost(props)
        .then(
            () => {
                // blog post created, navigate to index page
                //navigate using this.context.router.push with the new path
                this.context.router.push('/');
            }
        );
  }

  render(){
    //function to handle submit
    // this function is obtains via factory Function reduxForm
    const handleSubmit = this.props.handleSubmit;

    // this are full objects that can handle an input of a form
    const title = this.props.fields.title;
    const categories = this.props.fields.categories;
    const content  = this.props.fields.content;

    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) } >
        <h3>Create a New Post</h3>
        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
          <label>Title</label>
          <input type="text" className="form-control" {...title}/>
          <div className="text-help">
            {title.touched ? title.error : ''}
          </div>
        </div>
        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>
        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>
        <input type="submit" className="btn btn-primary" />
        <Link to="/" className="btn btn-primary btn-danger"> Cancel</Link>
      </form>
    );
  }
}

function validate(value){
    const errors = {};

    if(!value.title){
        errors.title= 'Enter a title!';
    }
    if(!value.categories){
        errors.categories = 'Enter a few categories!';
    }
    if(!value.content){
        errors.content= 'Enter some content!';
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
