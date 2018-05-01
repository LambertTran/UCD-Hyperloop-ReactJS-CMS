// /** Packages */
// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import fetchMock from 'fetch-mock';

// /** Helpers */
// import * as constants from './constants';
// import * as get from './getRequest';

// /** Create store */
// const createMockStore = configureMockStore([thunk]);
// const store = createMockStore({ data: {} });

// const mockResponse = {
//   body: {}
// }

// fetchMock.get(constants.URL,mockResponse);

// describe('getRequests', () => {
//   it('makes get all subteams for dashboard page', () => {
//     const expectedResponse = {
//       type: constants.GET_ALL_SUBTEAMS,
//       allSubTeams: [],
//     }

//     return store.dispatch(get.getAllSubTeams())
//       .then(() => {
//         expect(store.getActions()).toEqual(expectedResponse);
//       })
//   })
// })