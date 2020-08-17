import React from 'react';
import renderer from 'react-test-renderer';

import HeroesList from './HeroesList';

it('renders correctly when there is no props', () => {
  const tree = renderer.create(<HeroesList />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly where there are props', ()=>{
    const src = 'string'
    const name = 'string'
    const tree = renderer.create(<HeroesList name={name} src={src} />).toJSON();
    expect(tree).toMatchSnapshot();
})
