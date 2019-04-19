//Q1
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
import 'es6-promise';
import './App.css';

class App extends Component {

render() {
    async function fetchInfo () {
      return fetch(`https://gist.github.com/thomasmetta/4f86937797f89cc74547d985810dd5b6.json`)
        .then(response => response.json())
        .then(json => dispatch(getInfo(json)))
    };

    function getInfo (json) {
      let x = json.filter((item) => {
        console.log(item);
      });
      let mapped = x.map((items) => {
        return { "first": items.name.first, "last": items.name.last, "balance":items.balance };
      });
      console.log(mapped);
      return mapped;
    };

    fetchInfo();
    return (
      <div className="App">
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
          >
          </a>
        </header>
      </div>
    );
  }
}

export default App;