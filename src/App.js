import React, { Component } from 'react';
// this lets us use react - also using class based components
import './App.css'; // allows us to use css

import Header from './Header'; // different components
import SectionMain from './SectionMain'; // ^
import Aside from './Aside'; // ^
import Footer from './Footer'; // ^

// creates class based component
class App extends Component {
// our page
  render() {
    return (
      <div className="App">
        <Header backColor="green" width="50%"></Header>
        <SectionMain></SectionMain>
        <Aside></Aside>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
// export so it can be used in index.js
