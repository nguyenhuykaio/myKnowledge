import React, { Component } from 'react';
import './App.css';
const data1 = [
  {
    id: 1,
    name: 'a',
    content: {
      level: 1,
      title: 'content a'
    }
  },
  {
    id: 2,
    name: 'b',
    content: {
      level: 2,
      title: 'content b'
    }
  },
  {
    id: 3,
    name: 'c',
    content: {
      level: 3,
      title: 'content c'
    }
  }
]
const data2 = [
  {
    id: 1,
    name: 'd data2',
    content: {
      level: 1,
      title: 'content d data2'
    }
  },
  {
    id: 2,
    name: 'e data2',
    content: {
      level: 2,
      title: 'content e data2'
    }
  },
]
class App extends Component {
  constructor() {
    super();
    this.state = { width: 0 };
  }

  render() {
    return (
      <div>
        <div>aaa</div>
      </div>
    );
  }
}

export default App;
