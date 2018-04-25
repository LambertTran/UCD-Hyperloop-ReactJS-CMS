// packages
import React from 'react';
import { shallow } from 'enzyme';
import setupTests from '../../shares/setupTests';

// components
import ImageCard from './ImageCard';

describe('ImageCard', () => {
  const imageCard = shallow( <ImageCard /> );

  it('renders correctly', () => {
    expect(imageCard).toMatchSnapshot();
  })

})