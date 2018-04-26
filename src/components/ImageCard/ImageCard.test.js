// packages
import React from 'react';
import { shallow } from 'enzyme';
import setupTests from '../../shares/setupTests';

// components
import ImageCard from './ImageCard';

describe('ImageCard', () => {
  // initiate sample props
  const img = 'http://kb4images.com//images/image/37272651-image.jpg';
  const subteam = 'business-team';
  const props = {img,subteam};

  // mock component
  const mockImageCard = jest.fn();
  const imageCard = shallow( <ImageCard {...props} /> );

  it('renders correctly', () => {
    expect(imageCard).toMatchSnapshot();
  })

  describe('when props are passed into this component', () => {{
    it('has image link', () => {
      expect(imageCard.find('.image-card img').prop('src')).toEqual(img);
    })
    
    it('has correct url and title', () => {
      expect(imageCard.find('.image-card h3').text()).toEqual(subteam);
    })
  }})

  describe('when clicking on `ImageCard`', () => {

    beforeEach(() =>{
      imageCard.find('.image-card').simulate('click');
    })
  })
})