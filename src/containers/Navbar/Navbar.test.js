// packages
import React from 'react';
import { shallow } from 'enzyme';
import setupTests from '../../shares/setupTests';

// components
import Navbar from './Navbar';

describe('Navbar', () => {
  const navbar = shallow( <Navbar /> );

  it('renders correctly', () =>{
    expect(navbar).toMatchSnapshot();
  })
})