import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      _this : 'open table',
      _that : 'your finances'
    }

    this.getThisNThatAgain = this.getThisNThatAgain.bind(this);
    this.typeWriter = this.typeWriter.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(json => this.setState({_this : json.this, _that : json.that}));
  }

  getThisNThatAgain() {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(json => this.setState({_this : json.this, _that : json.that}));
      this.typeWriter(this.state._this, 0, "this");
      this.typeWriter(this.state._that, 0, "that")
  }

  typeWriter(text, i, elId) {
    // check if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.getElementById(elId).innerHTML = text.substring(0, i+1);

      // wait for a while and call this function again for next character
      setTimeout(this.typeWriter(text, i + 1, elId), 100);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="box-wrap">
          <div className="box">
            <label className="lbl">Wait, what does your startup do?</label>
            <label className="lbl"> So, basically, it is like a</label>
            <div className="lbl-big" id="this">{this.state._this}</div>
            <label className="lbl">for</label>
            <div className="lbl-big" id="that">{this.state._that}</div>
            <button className="btn" onClick={this.getThisNThatAgain} id="button" type="button">Refresh</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
