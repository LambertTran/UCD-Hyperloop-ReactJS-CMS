/** Packages */
import axios from 'axios';

/** Constants and keys */
import * as constants from './constants';

export const getAllSubTeams = () => {
  const location = 'dashboard';
  const req = axios.get(`${constants.URL}/${location}`);
  
  return dispatch => {
    req.then((res) => {
      dispatch({
        type: constants.GET_ALL_SUBTEAMS,
        allSubTeams: res.data
      })
    })
  } 
  
}



