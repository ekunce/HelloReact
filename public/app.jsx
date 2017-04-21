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

        if (name.length > 0) {
            this.refs.name.value = ''

            this.props.onNewName(name)
        }
    },
    
    render () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input type="text" ref="name"/>
                <button>Set Name</button>
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
            name: this.props.name
        }
    },
    handleNewName(name) {
        this.setState({
            name: name
        })
    },
    render () {
        var name = this.state.name
        var message = this.props.message

        return (
            <div>
                <GreeterMessage name={name} message={message}/>
                <GreeterForm onNewName={this.handleNewName}/>
            </div>
        )
    }
})

var name = "Eduard"
var message = "You are awesome"

ReactDOM.render(<Greeter name={name} message={message}/>, document.getElementById('app'))

