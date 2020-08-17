import React from 'react';
import renderer from 'react-test-renderer';

import Chart from './Chart';

it('renders correctly when there is no props', () => {
  const tree = renderer.create(<Chart />).toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders correctly when there is percentage', () => {
    const percentage = 'percentage';
    const tree = renderer.create(<Chart percentage={percentage} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  
  it('renders correctly when there is label', () => {
    const label = 'label';
    const tree = renderer.create(<Chart label={label} />).toJSON();
    expect(tree).toMatchSnapshot();
  });