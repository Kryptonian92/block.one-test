import React, { Component } from 'react'
import ReactDOM from 'react-dom';

import EOSJS from 'eosjs';

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
          .then(mainBlock =>{
            this.setState({
              isLoaded: true,
              items: mainBlock,
            })
          });
          let headBlockId = items.head_block_id;
          this.blockList(headBlockId, newItems);
    }

    blockList(headBlockId, newItems){
        let numList = [];

        for (var i = 0; i < 3; i++) {
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
                this.setState({
                  isLoaded: true,
                  newItems: json,
                })
              });
              
              let previousVal = newItems.previous;
              let previousObj = JSON.stringify(newItems);

              console.log(i + "block previous value: " + previousVal);
              numList.push(previousVal);
              this.setState({
                  head_block_id: previousVal,
              })
        }
        console.log("previous num array" + numList)
    }

    
      
    reset = () => {
        this.setState({
            on: true
        })
        this.blockHeadCall();
    }
    render() {
        var {isLoaded, items} = this.state;

        return (
            <div>
                <button onClick={this.reset}>LOAD</button>
                {this.state.on && (
                    <ol>
                        <li><b>Block id:</b> {items.head_block_id}, <b>Timestamp:</b> {items.head_block_time}, <b>Number of actions:</b> {items.block_cpu_limit}</li>
                    </ol>

                )}
            </div>
        )
    }
}
