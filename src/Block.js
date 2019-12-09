import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import EOSJS from 'eosjs';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';


export default class Block extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          newItems: [],
          numList: [],
          tempVar: "",
          toggle: false,
          on: false,
        }
        this.initialState = this.state;
      }
      componentDidMount() {
      }
      blockHeadCall = () => {
        var {isLoaded, items, newItems, tempVar} = this.state;
        fetch('https://api.eosnewyork.io/v1/chain/get_info', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
          .then(res => res.json())
          .then(info =>{
            let headBlockId = info.head_block_id;
            this.blockList(headBlockId);
          });
    }
    blockList(headBlockId){
        let numList = [];
        fetch('https://cors-anywhere.herokuapp.com/' + 'https://api.eosnewyork.io/v1/chain/get_block', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "block_num_or_id" : headBlockId
            })
        })
        .then(res => res.json())
        .then(json =>{
          this.addBlock(json);
        });
    }
    addBlock = (blockData) => {
      // Add the block to the list of blocks (items)
      this.setState(prevState => ({
        on: true,
        items: [...prevState.items, blockData]
      }));
      // Check if you should get another block
      if (this.state.items.length < 10) {
        this.blockList(blockData.previous);
      }
    }
    reset = () => {
        this.setState({
            on: true
        })
        this.blockHeadCall();
    }
    render() {
        // For each block that is in (items), build a list of "li" and render below
        const blocks = this.state.items.map((item, key) =>
            <li><b>Block id:</b> {item.id}, <b>Timestamp:</b> {item.timestamp}, <b>Number of actions:</b> {item.transactions.length}</li>
        );
        return (
            <div class="jumbotron">
                <button class="button" onClick={this.reset}>LOAD</button>
                <ol>
                  { blocks }
                </ol>
            </div>
        )
    }
}