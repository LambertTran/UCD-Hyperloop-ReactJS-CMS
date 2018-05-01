// packages
import React from 'react';
import { shallow } from 'enzyme';
import setupTests from '../../shares/setupTests';

import { DashBoard } from './DashBoard';

describe('DashBoard', () => { 
  const subteams = [{
    team_id: 1,
    team:'team-1',
    team_img: 'http:\\google.com',
  }]
  const dashboard = shallow(<DashBoard subteams={subteams} />)

  it('renders correctly', () => {
    expect(dashboard).toMatchSnapshot();
  });

  it('has at least 1 image card', () => {
    expect(dashboard.find('ImageCard').exists()).toBe(true);
  });
  
})