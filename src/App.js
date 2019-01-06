import React, { Component } from 'react';
import './App.css';
import './media_queries.css';
import 'font-awesome/css/font-awesome.min.css';
import marked from 'marked';

class TextArea extends React.Component {
	render() {
		return (
			<div id="preview" dangerouslySetInnerHTML={{__html: this.props.value}} />
		);
	}
}

class Editor extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    const renderer = new marked.Renderer();
    renderer.link = function(href, title, text) {
      const link = marked.Renderer.prototype.link.call(this, href, title, text);
      return link.replace("<a","<a target='_blank' ");
    };

    marked.setOptions({
      breaks: true,
      renderer: renderer,
      sanitize: true
    });

  const defaultMarkdown = 
`# This is an h1

## This is an h2

[MSN](https://www.msn.com/)

You inline code like this: \`<div></div>\`, between 2 backticks

This is a code block using 3 backticks:
\`\`\`
# code block
print '3 backticks or'
print 'indent 4 spaces'
\`\`\`

* This is a list item

>Blockquote

![Markdown logo](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

This is **bold text**
  `;

    this.state = {
      value: defaultMarkdown
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <div className="container">
        <div className="input">
          <textarea name="editor" id="editor" cols="30" rows="10" placeholder="Type in text you want to render as HTML" onChange={this.handleChange} defaultValue={this.state.value}></textarea>      
        </div>
        <div className="output">
          <TextArea value={marked(this.state.value,{sanitize: true})} />      
        </div>
      </div>
    );
  }
}

const Footer = () => {
  return (
    <footer>
        <a href="https://github.com/AmitP88/Random-Joke-Machine" target="_blank">
        <i className="fa fa-github fa-4x"></i>
        </a>      
        <p>Developed by <a href="https://github.com/AmitP88" target="_blank" className="github-profile-link">Amit Patel</a></p>      
    </footer>
  );
}

const App = () => {
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

export default App;
