import React from "react";
import { connect } from "react-redux";
import { register } from "../actions";
import Loader from "react-loader-spinner";

import { Form, FormGroup, Input, Label, Button, Fade, Col } from "reactstrap";

class Register extends React.Component {
  state = {
    registrationInfo: {
      username: "",
      password: "",
      email: ''
    }
  };

  handleChange = e => {
    this.setState({
      registrationInfo: {
        ...this.state.registrationInfo,
        [e.target.name]: e.target.value
      }
    });
  };

  register = e => {
    e.preventDefault();
    this.props
      .register(this.state.registrationInfo)
      .then(() => this.props.history.push("/login"));
  };

  render() {
    return (
      <div className="registration-form">
        <Form onSubmit={this.register}>
          <FormGroup row>
            <Label for="username" sm={2} size="lg">
              Username
            </Label>
            <Col sm={2}>
              <Input
                type="text"
                name="username"
                value={this.state.registrationInfo.username}
                onChange={this.handleChange}
                placeholder="username"
                bsSize="lg"
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="password" sm={2} size="lg">
              Password
            </Label>
            <Col sm={2}>
              <Input
                type="password"
                name="password"
                value={this.state.registrationInfo.password}
                onChange={this.handleChange}
                placeholder="password"
                bsSize="lg"
              />
            </Col>
            </FormGroup>
            <FormGroup row>
            <Label for="email" sm={2} size="lg">
              Email
            </Label>
            <Col sm={2}>
              <Input
                type="email"
                name="email"
                value={this.state.registrationInfo.email}
                onChange={this.handleChange}
                placeholder="email"
                bsSize="lg"
              />
            </Col>
          </FormGroup>

          <Button>
            {this.props.registering ? (
              <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" />
            ) : (
              "Register"
            )}
          </Button>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    registering: state.registering
  };
};

export default connect(
  mapStateToProps,
  { register }
)(Register);
