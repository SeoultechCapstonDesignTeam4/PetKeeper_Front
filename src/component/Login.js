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

  onClickDogs = async() => {
    const authToken = localStorage.getItem('token');
    
    // Define your Axios instance with default headers
    const axiosInstance = axios.create({
      headers: {
        'Content-Type': 'application/json', // Set the content type as needed
        'Authorization': `Bearer ${authToken}`, // Include the token in the 'Authorization' header
      },
    });
    axiosInstance.get('/user')
    .then((response) => {
      let data = response.data;
      alert(data.USER_EMAIL);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
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
      window.location.href = '/';
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  render() {
    const { inputId, inputPw } = this.state;
    if(!localStorage.getItem('token')){
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
    else{
      return(
        <div>
          <h2>Already Login</h2>
          <button type='button' onClick={this.onClickDogs}>
              ShowDogs
            </button>
        </div>
      );
    }
  }
    
}

export default Login;
