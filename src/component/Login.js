import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      inputId: '', // Initialize inputId and inputPw in state
      inputPw: '',
    };
  }

  handleInputId = (e) => {
    this.setState({
      inputId: e.target.value,
    });
  };

  handleInputPw = (e) => {
    this.setState({
      inputPw: e.target.value,
    });
  };

  onClickLogin = async () => {
    const { inputId, inputPw } = this.state;
    const data = {
      USER_EMAIL: inputId,
      USER_PASSWORD: inputPw,
    };
    try {
      const res = await axios.post('/user/login', data);
      console.log(res);
      localStorage.setItem('token', res.data.token);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  render() {
    const { inputId, inputPw } = this.state;

    return (
      <div>
        <h2>Login</h2>
        <div>
          <label htmlFor='input_id'>ID : </label>
          <input type='text' name='input_id' value={inputId} onChange={this.handleInputId} />
        </div>
        <div>
          <label htmlFor='input_pw'>PW : </label>
          <input type='password' name='input_pw' value={inputPw} onChange={this.handleInputPw} />
        </div>
        <div>
          <button type='button' onClick={this.onClickLogin}>
            Login
          </button>
        </div>
      </div>
    );
  }
}

export default Login;
