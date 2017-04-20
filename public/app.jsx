var GreeterMessage = React.createClass({
    render () {
        return (
            <div>
                <h1>Some H1</h1>
                <p>Some paragraph</p>
            </div>
        )
    }
})

var GreeterForm = React.createClass({
    render () {
        return (
            <form>
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
            message: "This is from a component!"
        }
    },
    getInitialState() {
        return {
            name: this.props.name
        }
    },
    onButtonClick(e) {
        e.preventDefault()

        var nameRef = this.refs.name
        var name = nameRef.value

        nameRef.value = ''

        if (typeof name === 'string' && name.length > 0) {
            this.setState({
                name: name
            })
        }
    },
    render () {
        var name = this.state.name
        var message = this.props.message

        return (
            <div>
                <h1>Hello {name}!</h1>
                <p>{message}</p>

                <GreeterMessage/>

                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>

                <GreeterForm/>
            </div>
        )
    }
})

var name = "Eduard"
var message = "My new message"

ReactDOM.render(<Greeter name={name} message={message}/>, document.getElementById('app'))

