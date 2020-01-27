import React from "react";

class InputField extends React.Component {
    state = {
        input: '',
    }

    handleInput = (event) => {
        this.setState({
            input: event.target.value
        });
        console.log("event")
    }
    onFormSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state.input)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onFormSubmit} className="ui form">
                <label>{this.props.inputName}</label>
                <input type="text" value={this.props.value} onChange={this.handleInput}/>
                </form>
            </div>

        );
    }
}

export default InputField