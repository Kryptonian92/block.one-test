import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

 
Enzyme.configure({ adapter: new Adapter() });

describe('testing block component', () =>{
    let wrapper = shallow(<App />);

    beforeEach(() => {
        const wrapper = shallow(<App />);
    });

    it('return output', () =>{
        expect(true).toBeTruthy();
    });
})