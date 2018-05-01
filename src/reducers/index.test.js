import rootReducer from './index';

describe('rootReducer', () => {
  it('init default state', () =>  {
    expect(rootReducer([],[])).toEqual({ 
      allSubTeams: [],
      subTeam: [],
    })
  })
})