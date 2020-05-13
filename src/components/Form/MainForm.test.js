import React from 'react';
import renderer from 'react-test-renderer';
import { MainForm } from './MainForm';

describe('testing Main Form component', () => {
    it('if Main Form component renders correctly', () => {
        const tree = renderer
            .create(<MainForm />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
})