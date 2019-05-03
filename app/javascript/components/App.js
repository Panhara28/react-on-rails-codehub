import React from 'react';
import Home from './Home';
import NewBlog from './NewBlog';
import Blogs from './Blogs';
import ShowDetail from './ShowDetail';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Category from './Category';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Category />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/new_blog" component={NewBlog} />
          <Route exact path="/blogs/:id" component={ShowDetail} />
        </Switch>
      </div>
    )
  }
}

export default App
