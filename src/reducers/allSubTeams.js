import * as constants from '../actions/constants';

const allSubTeams = (state = [], action) => {
  switch(action.type) {
    case constants.GET_ALL_SUBTEAMS:
      return action.allSubTeams;
    default:
      return state;
  }
}  

export default allSubTeams;