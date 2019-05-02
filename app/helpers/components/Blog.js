import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import App from './App';

class Blog extends React.Component {

  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    this._isMounted = true;
    axios
      .get('/api/blogs')
      .then(response => {
        if (this._isMounted) {
          this.setState({ blogs: response.data.blogs });
        }
      })
  }

  componentWillUnmount() {
   this._isMounted = false;
  }

  renderAllBlogs = () => {
    return(
      <div>
        <ul>
          {this.state.blogs.map(blog => (
            <li key={blog.id}>{blog.title}</li>
          ))}
        </ul>
      </div>
    )
  }

  render () {
    return (
      <div>
        {this.renderAllBlogs()}
      </div>
    );
  }
}

export default Blog;
