/** Package */
import React from 'react';
import { connect } from 'react-redux';

/** AJAX helper */
import { getSubTeam } from '../../actions/getRequest';

/** Styles */
import './SubTeamPage.scss';

export class SubTeamPage extends React.Component {

  componentDidMount() {
    const teamName = this.props.match.params.teamName;
    this.props.getSubTeam(teamName);
  }

  render() {

    return (
      <div className="row no-gutters">
        <div className="col-12 col-md-9 ml-auto subteam-pg">
          <h2>{this.props.subteam.team}</h2>
          <hr />
          <div className="subteam-manage">
            <button id="upload-btn" name="image" className="btn btn-outline-primary" >Update team image</button>
            <button id="upload-btn" name="detail" className="btn btn-outline-success">Update team description</button>
          </div>
          <div className="subteam-data">
            <h3>Team image</h3><hr />
            {/* <img src={team_img} alt="team" /> */}
            <p>Note: There is no image yet! Please upload your team image</p>
            <h3> Team Description </h3><hr />
            {/* <p>{{team_detail}}</p> */}
          </div>
        </div>
      </div>

    )
  }
}

export default connect(state => {
  return {
    subteam: state
  }
}, { getSubTeam })(SubTeamPage);