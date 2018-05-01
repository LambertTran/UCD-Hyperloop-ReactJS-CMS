import * as constants from '../actions/constants';

const subTeam = (state = [], action) => {
  console.log(action.subTeam)
  switch(action.type) {
    case constants.GET_SUBTEAM:
      return action.subTeam;

    default:
      return state;
  }
}  

export default subTeam;