import React from 'react';
import renderer from 'react-test-renderer';

import SearchHero from './SearchHero';

it('renders correctly when term is empty string', () => {
  const tree = renderer.create(<SearchHero />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly where there is object as props', ()=>{
    const term = 'term'
    const tree = renderer.create(<SearchHero term={term} />).toJSON();
    expect(tree).toMatchSnapshot();
})
