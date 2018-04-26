// packages
import React from 'react';
import { shallow } from 'enzyme';
import setupTests from '../../shares/setupTests';

// components
import DashBoard from './DashBoard';

describe('DashBoard', () => {
  const dashboard = shallow( <DashBoard /> );

  it('renders correctly', () => {
    expect(dashboard).toMatchSnapshot();
  })

  
})