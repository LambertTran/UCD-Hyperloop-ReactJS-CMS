import React from 'react';

export default class InputForm extends React.Component {

  constructor() {
    super();
    this.state = { opacity : 0 }
  }

  onOpen = () => {
    this.setState({ opacity : 1 });
  }

  onClose = () => {
    this.setState({ opacity: 0 });
  }

  render() {
    return (
      <div className="upload-modal-content">
        <form method="post" encType="multipart/form-data" action="/admin/team/{{team}}/upload-image">
          <h3>Please choose 1 image for your team</h3>
          <div className="form-group">
            <label>updates</label>
            <input type="file" name="img" className="form-control" />
          </div>
          <button onClick ={this.onOpen} type="submit" className="btn btn-primary">Upload</button>
          <button onClick ={this.onClose} type="button" className="btn btn-danger">Cancel</button>
        </form>
      </div>
    )
  }
}