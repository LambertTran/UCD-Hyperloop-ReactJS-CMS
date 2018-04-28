import * as constants from '../actions/constants';

const data = (state = [], action) => {
  console.log(action.allSubTeams)
  switch(action.type) {
    case constants.GET_ALL_SUBTEAMS:
      return action.allSubTeams;
    default:
      return state;
  }
}  

export default data;