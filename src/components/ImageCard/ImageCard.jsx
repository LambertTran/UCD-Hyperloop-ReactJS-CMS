import React from 'react';
import { Link } from 'react-router-dom';

export default class ImageCard extends React.Component {

  render() {
    return (
      <div className="image-card">
        <Link to={this.props.subteam}>
          <h3>{this.props.subteam}</h3> 
          <img src={this.props.img} alt=""/>
        </Link>   
      </div>
    )
  }
}