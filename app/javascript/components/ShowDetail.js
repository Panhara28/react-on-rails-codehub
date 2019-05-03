import React from 'react';
import ReactDom from 'react-dom';
import axios from 'axios';
import Header from './Header';
import Category from './Category';

class ShowDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      blog: {
        title: '',
        description: ''
      }
    };
  }

  componentDidMount() {
    axios
      .get(`/api/blogs/${this.props.match.params.id}`)
      .then(response => { {
        this.setState({ blog: response.data.blog })
        // console.log(response.data.blog);
      }
    })
  }

  render(){
    return(
      <div>
        <div className="row">
          <div className="col-md-8 blog-main">
            <div className="blog-post">
              <h2 className="blog-post-title">{this.state.blog.title}</h2>
              <p className="blog-post-meta">{this.state.blog.created_at} by <a href="#">{this.state.blog.author}</a></p>
              <p>
                {this.state.blog.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowDetail;
