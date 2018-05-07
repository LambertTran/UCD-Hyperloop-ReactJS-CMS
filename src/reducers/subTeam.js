import * as constants from '../actions/constants';

const subTeam = (state = [], action) => {
  switch(action.type) {
    case constants.GET_SUBTEAM:
      return action.subTeam;
    case constants.POST_IMAGE:
      return action.subTeam;
    default:
      return state;
  }
}  

export default subTeam;