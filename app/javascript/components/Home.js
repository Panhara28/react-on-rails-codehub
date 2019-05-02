// app/javascript/components/Home.js
import React from 'react';
import Header from './Header';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>Hello From Home.js</h1>
      </div>
    )
  }
}

export default Home;
