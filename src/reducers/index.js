/** Packages */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

/** Reducers */
import allSubTeams from './allSubTeams';
import subTeam from './subTeam';

// combine 2 or more reducers and return it as a big object
export default combineReducers({ 
  allSubTeams,
  subTeam,
  form: formReducer,
});