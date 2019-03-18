import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";

class Login extends React.Component {
  state = {
    loginInfo: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      loginInfo: {
        ...this.state.loginInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props
      .login(this.state.loginInfo)
      .then(() => this.props.history.push("auth"));
  };

  render(){
      return(
      <div>
          <form onSubmit={this.login}>

          <input
            type="password"
            name="password"
            value={this.state.loginInfo.password}
            onChange={this.handleChange}
          />
          <input 
            type="text"
            name="username"
            value={this.state.loginInfo.username}
            onChange={this.handleChange}
            />
            <button>
                
        
            </button>
          
          </form>
      </div>
      )
  }
}

const mapStateToProps = state =>{
    return{
        
    }
}

export default connect(
    mapStateToProps,
    {login}
)(Login)
