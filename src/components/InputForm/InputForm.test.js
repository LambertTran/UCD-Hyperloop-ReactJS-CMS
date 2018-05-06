// packages
import React from 'react';
import { shallow } from 'enzyme';
import setupTests from '../../shares/setupTests';

import InputForm from './InputForm';

describe('InputForm', () => { 
  const inputForm = shallow( <InputForm />);

  it('renders correctly', () => {
    expect(inputForm).toMatchSnapshot();
  })

  it('has default opacity is 0', () => {
    expect(inputForm.state().opacity).toEqual(0);
  })

  it('should close when cancel button is clicked', () => {
    inputForm.find('.btn-danger').simulate('click');
    expect(inputForm.state().opacity).toEqual(0);
  })

  it('should open when cancel button is clicked', () => {
    inputForm.find('.btn-primary').simulate('click');
    expect(inputForm.state().opacity).toEqual(1);
  })
})