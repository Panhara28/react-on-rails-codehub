import React from 'react';
import ReactDom from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blogs from './Blogs';
import NewBlog from './NewBlog';
class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/new_post" component={NewBlog}/>
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    )
  }
}

export default App;
;
