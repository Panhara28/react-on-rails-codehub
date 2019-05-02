// app/javascript/components/NewPost.js

import React from 'react';
import axios from 'axios';
import { passCsrfToken } from '../util/helpers';

class NewPost extends React.Component {
  state = {
    title: '',
    body: ''
  }

  componentDidMount() {
    passCsrfToken(document, axios)
  }

  handleSubmit = event => {
   event.preventDefault();
   const post = {
      title: this.state.title,
      body: this.state.body
    }

    axios
      .post('/api/posts', post)
      .then(response => {
        console.log(response);
        console.log(response.data);
      })
  }

  render() {
    return (
      <div>
        <h1>New Post</h1>
        <form>
            <input
              name="title"
              onChange={this.handleChange}
              placeholder="title"
              type="text"
            />
            <input
              name="body"
              onChange={this.handleChange}
              placeholder="body"
              type="text"
            />
          <button>Create Post</button>
        </form>
      </div>
    )
  }
}

export default NewPost