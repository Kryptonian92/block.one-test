import React, { Component } from 'react'
import EOSJS from 'eosjs';

export default class Block extends Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: [],
          toggle: false,
          on: false,
        }
        this.initialState = this.state;
      }

    //   state = {
    //     on: false,
    // }
      componentDidMount() {
        var {isLoaded, items} = this.state;

        fetch('https://api.eosnewyork.io/v1/chain/get_info')
          .then(res => res.json())
          .then(json =>{
            this.setState({
              isLoaded: true,
              items: json,
            })
          });
          let headBlock = items.head_block_id;
          console.log("head block id is: " + headBlock);
      }
      
      blockList = () => {
        fetch('https://api.eosnewyork.io/v1/chain/get_block', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Headers':'*'
            },
            body: JSON.stringify({
                "block_num_or_id" : "058d154dee958852b6d8e72cee24ab4ca288d3c738c210fdb111576368028620"
            })
          })
            for (var i = 0; i < 10; i++) {
                console.log("test data" + i)
            }
    }
      
    reset = () => {
        this.setState({
            on: true
        })
        this.componentDidMount();
        this.blockList();
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
