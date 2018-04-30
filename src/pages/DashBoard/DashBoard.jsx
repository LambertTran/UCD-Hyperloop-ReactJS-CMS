/** Packages */
import React from 'react';
import { connect } from 'react-redux';

/** AJAX helpers */
import { getAllSubTeams } from '../../actions/getRequest';

/** Components */
import Navbar from '../../containers/Navbar/Navbar';
import ImageCard from '../../components/ImageCard/ImageCard';

/** Styles */
import './DashBoard.scss';

export class DashBoard extends React.Component {
  
  componentDidMount() {
    this.props.getAllSubTeams();
  }
  
  renderSubTeamList = () => {
    return this.props.subteams.map((subteam) => {
      return (
        <ImageCard 
          key = {subteam.team_id}
          subteam={subteam.team}
          img = {subteam.team_img}
          styleClass = 'subteam'
        />
      )
    })
  }

  render() {
    return (
      <div className="dashboard">
        <Navbar />
        <h1>WellCome</h1>
        <div>
          {this.renderSubTeamList()}  
        </div>

      </div>
    )
  }
}


export default connect(state => {
  return {
    subteams: state
  }
}, { getAllSubTeams })(DashBoard);