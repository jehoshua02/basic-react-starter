var React = require('react');
var ReactDOM = require('react-dom');
var App = require('components/App');

// create container
var container = document.createElement('div');
container.id = 'app';
document.body.appendChild(container);

// render
ReactDOM.render(<App />, container);
