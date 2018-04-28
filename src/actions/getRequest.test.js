// packages
import setupTests from '../../shares/setupTests';

import configureMockStore from 'redux-mock-store';

import thunk from 'redux-thunk';

import fetchMock from 'fetch-mock';

import * as constants from './constants';
import * as actions from './getRequest';

// create store
const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ data: {} });

const mockResponse = {
  body: {}
}

fetchMock.get(constants.URL,mockResponse);

describe('getRequests', () => {
  it('makes get all subteams for dashboard page', () => {
    
  })
})