/** Package */
import React from 'react';
import { connect } from 'react-redux';

/** AJAX helper */
import { getSubTeam } from '../../actions/getRequest';

/** Styles */
import './SubTeamPage.scss';

/** Components */
import InputModal from '../../containers/InputModal/InputModal';


export class SubTeamPage extends React.Component {

  constructor() {
    super();
    this.state = {
      isModalOpen: false,
    }
  }

  componentDidMount() {
    const teamName = this.props.match.params.teamName;
    this.props.getSubTeam(teamName);
  }

  openModal = () => {
    this.setState({ isModalOpen: true });
  }

  render() {

    return (
      <div className="row no-gutters">
        <div className="col-12 col-md-9 ml-auto subteam-pg">
          <h2>{this.props.subteam.team}</h2>
          <hr />
          <div className="subteam-manage">
            <InputModal btnName='Update team image' />
            <InputModal btnName='Update team description' />
          </div>
          <div className="subteam-data">
            <h3>Team image</h3><hr />
            <p>Note: There is no image yet! Please upload your team image</p>
            <h3> Team Description </h3><hr />
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