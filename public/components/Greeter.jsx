var React = require('react')
var GreeterMessage = require('GreeterMessage')
var GreeterForm = require('GreeterForm')

var Greeter = React.createClass({
    getDefaultProps() {
        return {
            name: "React!",
            message: "This is the default message!"
        }
    },
    getInitialState() {
        return {
            name: this.props.name,
            message: this.props.message
        }
    },
    handleUpdates(updates) {
        this.setState(updates)
    },
    render () {
        var name = this.state.name
        var message = this.state.message

        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onUpdates={this.handleUpdates}/>
            </div>
        )
    }
})

module.exports = Greeter;