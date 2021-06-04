import React, { Component } from 'react'; // so we can use react
import './Header.css'; // bring in header

// making a header component
class Header extends Component {
  render() {
    const style = {
      width: this.props.width, // this refers to this component-header 
      backgroundColor: this.props.backColor // kinda have an idea 
    }
    return (
        <header style={style} className="Header-main">// a little confusing still 
        </header>

    );
  }
}


//document.querySelector("header").style.backgroundColor = "red"
