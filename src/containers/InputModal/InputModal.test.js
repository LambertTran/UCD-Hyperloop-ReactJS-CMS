/** Packages */
import React from 'react';
import { shallow } from 'enzyme';
import setupTests from '../../shares/setupTests';

/** Test component */
import InputModal from './InputModal';

/** Test cases */
describe('InputModal', () => {
  const inputModal = shallow(<InputModal />);

  it('renders correctly', () => {
    expect(inputModal).toMatchSnapshot();
  })

})
