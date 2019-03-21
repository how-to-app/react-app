import React from "react";
import { connect } from "react-redux";
import { login } from "../actions";
import Loader from "react-loader-spinner";

import { Form, FormGroup, Input, Label, Button, Fade, Col } from "reactstrap";

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
      .then(() => this.props.history.push("/howtolist"));
      
  };

  render() {
    return (
      <div className="login-form">
        <Form onSubmit={this.login}>
          <FormGroup row>
            <Label for="username" sm={2} size="lg">
              Username
            </Label>
            <Col sm={2}>
              <Input
                type="text"
                name="username"
                value={this.state.loginInfo.username}
                onChange={this.handleChange}
                placeholder="username"
                bsSize="lg"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleEmail" sm={2} size="lg">
              Password
            </Label>
            <Col sm={2}>
              <Input
                type="password"
                name="password"
                value={this.state.loginInfo.password}
                onChange={this.handleChange}
                placeholder="password"
                bsSize="lg"
              />
            </Col>
          </FormGroup>

          <Button>
            {this.props.loggingIn ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Log in"
            )}
          </Button>
        </Form>
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
