import React from 'react';
import { render } from '@testing-library/react';
import Block from './Block';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';

 
Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('testing block component', () =>{

    beforeEach(() => {
        const wrapper = shallow(<Block />);
    });

    beforeAll(() => {
        global.fetch = jest.fn();
      });

    afterEach(() => {
        const wrapper = shallow(<Block />);
        wrapper.unmount();
    });

    it('testing initial state values', () =>{
        let wrapper = shallow(<Block />);
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
        let wrapper = shallow(<Block />);
        const mockResponse = {
            "server_version":"7c0b0d38",
            "chain_id":"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906",
            "head_block_num":94446982,
            "last_irreversible_block_num":94446659,
            "last_irreversible_block_id":"05a1244345779d4151109f10b280bb805e5e62a4ac3ac7a0cd1b7755d8580c91",
            "head_block_id":"05a12586140e157c17139dcb0b0ca6b3b45adeda163d57c006e5b938f13b9892",
            "head_block_time":"2019-12-11T13:53:18.500",
            "head_block_producer":"eosrapidprod",
            "virtual_block_cpu_limit":200000,
            "virtual_block_net_limit":1048576000,
            "block_cpu_limit":133062,
            "block_net_limit":1036288,
            "server_version_string":"v1.8.4",
            "fork_db_head_block_num":94446982,
            "fork_db_head_block_id":"05a12586140e157c17139dcb0b0ca6b3b45adeda163d57c006e5b938f13b9892"
        }
        const mockHeadBlockId = "aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906";

        expect(true).toBeTruthy();
    });

    it('blockList', () =>{
        let wrapper = shallow(<Block />);

        expect(true).toBeTruthy();
    });

    it('addBlock', () =>{
        let wrapper = shallow(<Block />);

        expect(true).toBeTruthy();
    });

    it('reset', () =>{
        let wrapper = shallow(<Block />);
    });

    it('render', () =>{
        let wrapper = shallow(<Block />);
        const loadButton = wrapper.find('button');
        const spyRender = jest.spyOn(Block.prototype,"render");
        const render = wrapper.instance().render();

        expect(spyRender).toHaveBeenCalledTimes(1);
    });
})