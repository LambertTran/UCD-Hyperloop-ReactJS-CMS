import React from 'react';

export default class ImageCard extends React.Component {

  render() {
    return (
      <div>
        <img src={this.props.imgage} alt=""/>
      </div>
    )
  }
}