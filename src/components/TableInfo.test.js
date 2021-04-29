import React from 'react';
import renderer from 'react-test-renderer';
import TableInfo from './TableInfo';
import info from '../jsonInfo.json'

it('renders TableInfo correctly', () => {
  const tree = renderer
    .create(<TableInfo sport={info.SportList[0]} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
