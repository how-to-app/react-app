import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import Loader from "react-loader-spinner";

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
      .then(() => this.props.history.push("/logged-in"));
  };

  render() {
    return (
      <div className="login-form">
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.loginInfo.username}
            onChange={this.handleChange}
            placeholder="username"
          />
          <input
            type="password"
            name="password"
            value={this.state.loginInfo.password}
            onChange={this.handleChange}
            placeholder="password"
          />

          <button>
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Log in"
            )}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    loggingIn: state.loggingIn
  };
};

export default connect(
  mapStateToProps,
  { login }
)(Login);
