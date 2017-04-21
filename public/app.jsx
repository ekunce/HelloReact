var GreeterMessage = React.createClass({
    render () {
        var name = this.props.name
        var message = this.props.message

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>
            </div>
        )
    }
})

var GreeterForm = React.createClass({
    onFormSubmit(e) {
        e.preventDefault()

        var name = this.refs.name.value
        var message = this.refs.message.value
        var updates = {}

        if (name.length > 0) {
            this.refs.name.value = ''
            updates.name = name
        }

        if (message.length > 0) {
            this.refs.message.value = ''
            updates.message = message
        }

        this.props.onUpdates(updates)
    },
    
    render () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div>
                    <input type="text" ref="name" placeholder="Enter name"/>
                </div>
                <div>
                    <textarea ref="message" placeholder="Enter message" />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        )
    }
})

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

var name = "Eduard"
var message = "You are awesome"

ReactDOM.render(<Greeter name={name} message={message}/>, document.getElementById('app'))

