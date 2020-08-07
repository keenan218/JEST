import React from 'react';
import Counter from './Counter';
import renderer from 'react-test-renderer';

test("It matches the snapshot", () => {
  const tree = renderer.create(<Counter/>).toJSON();
  expect(tree).toMatchSnapshot();
})
