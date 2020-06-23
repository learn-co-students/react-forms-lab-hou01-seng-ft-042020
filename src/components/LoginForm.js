import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (e) => {
    const target = e.target
    this.setState(prevState => {
      return {
        ...prevState,
        [target.name]: target.value
      }
    }, () => console.log(this.state))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const username = this.state.username;
    const password = this.state.password;
    if (username.length > 0 && password.length > 0) {
      this.props.handleLogin({username, password})
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input value={this.state.username} onChange={this.handleInputChange} id="username" name="username" type="text" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input value={this.state.password} onChange={this.handleInputChange} id="password" name="password" type="password" />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
