import React from 'react';

export default class Navbar extends React.Component{

  render() {
    return (
      <div className="c-navbar">
        <li>
          <i class="fa fa-tachometer" aria-hidden="true"></i>
          <a href="/admin/">DashBoard</a>
        </li>
        <li>
          <i class="fa fa-sign-out" aria-hidden="true"></i>
          <a href="/logout">Log out</a>
        </li>
      </div>
    )
  }
}