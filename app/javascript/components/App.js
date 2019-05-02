import React from 'react'
import Home from './Home'
import NewBlog from './NewBlog'
import Blogs from './Blogs'
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogs" component={Blogs} />
          <Route exact path="/new_blog" component={NewBlog} />
        </Switch>
      </div>
    )
  }
}

export default App
