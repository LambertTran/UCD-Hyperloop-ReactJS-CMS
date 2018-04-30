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
  const styleClass = 'card-style';
  const props = {img,subteam,styleClass};

  // mock component
  const imageCard = shallow( <ImageCard {...props} /> );

  it('renders correctly', () => {
    expect(imageCard).toMatchSnapshot();
  })

  describe('when props are passed into this component', () => {
    it('has corrected image link', () => {
      expect(imageCard.find('img').prop('src')).toEqual(img);
    });
    
    it('has corrected title', () => {
      expect(imageCard.find('h3').text()).toEqual(subteam);
    });

    it('has corrected style', () => {
      expect(imageCard.find(`.${styleClass}`).exists()).toBe(true);
    });
  })
})