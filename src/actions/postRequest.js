/** Packages */
import axios from 'axios';

/** Constants and keys */
import * as constants from './constants';

export const uploadImage = (values) => {
  const location = 'dashboard';
  // const req = axios.get(`${constants.URL}/${location}`);
  

  console.log(values)

  const formData = new FormData();
  formData.append('file',values);
  console.log(formData);

  // return dispatch => {
  //   return req.then((res) => {
  //     dispatch({
  //       type: constants.POST_IMAGE,
  //       allSubTeams: res.data
  //     })
  //   })
  // } 
}