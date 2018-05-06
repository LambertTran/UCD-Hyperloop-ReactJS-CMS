/** Packages */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

/** Helpers */
import * as constants from './constants';
import * as get from './getRequest';

/** Create store */
const createMockStore = configureMockStore([thunk]);
const store = createMockStore({});

describe('getRequests', () => {
  const expectedResponse = {
    type: constants.GET_ALL_SUBTEAMS,
    allSubTeams: [{data : ""}],
  }

  it('makes get all subteams for dashboard page', () => {
    return store.dispatch(get.getAllSubTeams())
      .then(() => {
        expect(store.getActions()[0]).toHaveProperty('type',expectedResponse.type);
        expect(store.getActions()[0]).toHaveProperty('allSubTeams');
      })

  })
})