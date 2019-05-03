import React from 'react';
import ReactDom from 'react-dom';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import Category from './Category';

class Blogs extends React.Component {

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
      <div className="row mb-2">
        {this.state.blogs.map(blog =>(
          <div className="col-md-6" key={blog.id}>
            <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 text-success">Design</strong>
                <h3 className="mb-0">{blog.title}</h3>
                <div className="mb-1 text-muted">{blog.created_at}</div>
                <p className="mb-auto">{blog.body}</p>
                <NavLink to={`/blogs/${blog.id}`} className="stretched-link">
                  Continue Reading
                </NavLink>
              </div>
              <div className="col-auto d-none d-lg-block">
                <svg className="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
              </div>
            </div>
          </div>
        ))}
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

export default Blogs;
