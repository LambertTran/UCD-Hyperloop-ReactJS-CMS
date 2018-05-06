// packages
import React from 'react';
import { shallow } from 'enzyme';
import setupTests from '../../shares/setupTests';

import { SubTeamPage } from './SubTeamPage';

describe('SubTeamPage', () => { 
  const teamdata = [{
    team: "Wheels",
    team_detail: "Hello world",
    team_id: 1,
    team_img: "http:\\google.com"
  }]
  const subteam = shallow(<SubTeamPage subteam={teamdata} />)

  it('renders correctly', () => {
    expect(subteam).toMatchSnapshot();
  });

  it('has at least 1 input form', () => {
    expect(subteam.find("InputForm").exists()).toBe(true);
  })

  it('has no modal open at default state', () => {
    expect(subteam.state().isModalOpen).toEqual(false);
  })

  it('should open modal on click')
})