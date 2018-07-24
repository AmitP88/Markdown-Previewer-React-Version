import React, { Component } from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      input: ''
    };
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <div className="input">
          <textarea name="editor" id="editor" cols="30" rows="10" placeholder="Type in text you want to render as HTML" value={this.state.input} onChange={this.handleChange}></textarea>      
        </div>
        <div className="output">
          <div id="preview">{this.state.input}</div>      
        </div>
      </div>  
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>
          <a href="https://github.com/AmitP88/Random-Joke-Machine" target="_blank">
          <i className="fa fa-github fa-4x"></i>
          </a>      
          <p>Developed by <a href="https://github.com/AmitP88" target="_blank" className="github-profile-link">Amit Patel</a></p>      
      </footer>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">HTML Markdown Previewer</h1>
        </header>
        <Editor />
        <Footer />         
      </div>
    );
  }
}

export default App;
