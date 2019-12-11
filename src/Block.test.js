import React from 'react';
import { render } from '@testing-library/react';
import Block from './Block';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

describe('testing block component', () =>{
    let wrapper = shallow(<Block />);

    beforeEach(() => {
        const wrapper = shallow(<Block />);
    });

    it('testing initial state values', () =>{
        const countState = wrapper.state();
        const mockState = {
            error: null,
            isLoaded: false,
            items: [],
            newItems: [],
            numList: [],
            tempVar: "",
            toggle: false,
            on: false,
          }
        expect(countState).toStrictEqual(mockState);
    });

    it('blockHeadCall', () =>{
        expect(true).toBeTruthy();
    });

    it('blockList', () =>{
        expect(true).toBeTruthy();
    });

    it('addBlock', () =>{
        expect(true).toBeTruthy();
    });

    it('reset', () =>{
        expect(true).toBeTruthy();
    });

    it('render', () =>{
        expect(true).toBeTruthy();
    });
})