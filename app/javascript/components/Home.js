// app/javascript/components/Home.js
import React from 'react';
import Header from './Header';
import Category from './Category';
import Banner from './Banner';
import Blogs from './Blogs';
class Home extends React.Component {
  render() {
    return (
      <div>
        <Banner />
        <Blogs />
      </div>
    )
  }
}

export default Home;
