// app/javascript/components/Home.js
import React from 'react';
import Header from './Header';
import Category from './Category';
import Banner from './Banner';
class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Category />
        <Banner />
      </div>
    )
  }
}

export default Home;
