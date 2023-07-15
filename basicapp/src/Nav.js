import React, {Component} from "react";
import './Nav.css';

export default class Nav extends Component{
    render() {
      return (
        <div className="topnav">
        <a href="google.com">Home</a>
        <a href="men.html">Men's Clothing</a>
        <a href="women.html">Women's Clothing</a>
        <a href="kids.html">Kids</a>
        <a href=""> Accessories </a>
      </div>
      );
    }
}