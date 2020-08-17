import React from 'react';
import renderer from 'react-test-renderer';

import HeroDetails from './HeroDetails';

it('renders correctly when <HeroDetails /> is null', () => {
  const tree = renderer.create(null).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly where there is object as props', ()=>{

        let values1 = ['one','two']
        let keys1 = ['one','two']
        let values2 = ['one','two']
        let keys2 = ['one','two']
        const tree = renderer.create(<HeroDetails biokeys={keys1} bioels={values1} statkeys={keys2} statels={values2} />).toJSON();
        expect(tree).toMatchSnapshot();
})
