var React = require('react')
var ReactDOM = require('react-dom')
var Greeter = require('Greeter')

var name = "Eduard"
var message = "You are awesome"

ReactDOM.render(<Greeter name={name} message={message}/>, document.getElementById('app'))

