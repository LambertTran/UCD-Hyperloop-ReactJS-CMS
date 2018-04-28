/** Packages */
import React from 'react';

/** Styles */
import './Navbar.scss';

export default class Navbar extends React.Component{

  render() {
    return (
      <div className="c-navbar">
        <li>
          <i className="fa fa-tachometer" aria-hidden="true"></i>
          <a href="/admin/">DashBoard</a>
        </li>
        <li>
          <i className="fa fa-sign-out" aria-hidden="true"></i>
          <a href="/logout">Log out</a>
        </li>
      </div>
    )
  }
}