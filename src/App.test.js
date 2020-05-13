import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe('testing App component', () => {
  it('if App component renders correctly', () => {
    const tree = renderer
        .create(<App />)
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
})