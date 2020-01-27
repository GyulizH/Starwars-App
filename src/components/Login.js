import React from "react";
import axios from "axios"
import InputField from './InputField'

class Login extends React.Component {

    state = {
        username: '',
        password: '',
        loginError: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    handleSubmit=(event)=> {
        const {username, password} = this.state
        axios.post(
            "https://swapi.co/api/",
            {
                headers:{
                    'origin':'localhost'
                },
                user: {
                    username: username,
                    password: password
                }
            },
            {withCredentials: true}
        ).then(response => {
            if (response.data.status === "created") {
                console.log("hey")
            }
        })
            .catch(error => {
               //console.log("login error", error)
            })
        //event.preventDefault();
    }


    render() {
        return (
            <div>
                <div>
                <InputField inputName="Username" value={this.state.username} onSubmit={this.handleSubmit}/>
                <InputField inputName="Password"  value={this.state.password} onSubmit={this.handleSubmit}/>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="username"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        required
                    />

                    <button type="submit">Login</button>
                </form>
            </div>
        )
    }
}

export default Login