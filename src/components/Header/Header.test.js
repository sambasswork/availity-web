import React from 'react';
import renderer from 'react-test-renderer';
import { Header } from './Header';

describe('testing Header component', () => {
    it('if Header component renders correctly', () => {
        const tree = renderer
            .create(<Header />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})