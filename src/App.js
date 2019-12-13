import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Block from './Block';
import 'bootstrap/dist/css/bootstrap.css';


// import { Api, JsonRpc, RpcError } from 'eosjs';
// import { JsSignatureProvider } from 'eosjs/dist/eosjs-jssig';

function App() {
  
  return (
    <div className="App jumbotron">
      <Block></Block>
    </div>
  );
}

export default App;
