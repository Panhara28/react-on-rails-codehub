import React from 'react';
import ReactDom from 'react-dom';
import { passCsrfToken } from '../util/helpers';
import Header from './Header';
import Category from './Category';
import Banner from './Banner';
import axios from 'axios';

class NewBlog extends React.Component {
  state = {
    title: '',
    body: '',
    image: ''
  }

  componentDidMount(){
    passCsrfToken(document, axios);
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handSubmit = event =>{
    event.preventDefault();
    const blog ={
      title: this.state.title,
      body: this.state.body,
      image: this.state.image
    }
    axios.post('/api/blogs', blog)
         .then(response => {
           console.log(response);
           console.log(response.data);
         });
  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-md-6 order-md-1">
            <h4 className="mb-3 mt-3">Add New Blog</h4>
            <form className="needs-validation" onSubmit={e => this.handSubmit(e)} encType="multipart/form-data">
              <div className="row">
                <div className="col-md-12 mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="title"
                    placeholder="Title"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-md-12 mb-3">
                  <textarea onChange={this.handleChange} className="form-control" rows="10"></textarea>
                </div>
                <div className="col-md-12 mb-3">
                  <input
                    type="file"
                    className=""
                    name="image"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <button className="btn btn-primary btn-lg btn-block" type="submit">Create Post</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default NewBlog;
