import React from 'react';
import renderer from 'react-test-renderer';

import Hero from './Hero';

it('renders correctly when there is no props', () => {
  const tree = renderer.create(<Hero />).toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders correctly when there is src', () => {
    const src = 'path';
    const tree = renderer.create(<Hero src={src} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('renders correctly when there is name', () => {
    const name = 'string';
    const tree = renderer.create(<Hero name={name} />).toJSON();
    expect(tree).toMatchSnapshot();
  });