import React from 'react';
import { render } from '@testing-library/react';
import Block from './Block';
import { shallow } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
Enzyme.configure({ adapter: new Adapter() });

let wrapper 

beforeEach(() => {
    const wrapper = shallow(<Block />)
});
//  afterEach(() => {
//     wrapper.unmount();
//  });

describe('testing initial state', () =>{
    it('starts with false isLoaded value', () =>{
        const wrapper = shallow(<Block />)

        const countState = wrapper.state();
        // const defTest = wrapper.instance().jestFunction();
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
        // expect(defTest).toBe("banana");
    })
})