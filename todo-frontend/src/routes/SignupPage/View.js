import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class SignupPage extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '', password: '' , name:'', nameError: false, emailError: false, passwordError: false , error: false };
  }

  handleSubmit = (e) => {
    if (this.state.name === '') {
      this.setState({ nameError: true, error: true });
      e.preventDefault();
    } else if (this.state.username === '') {
      this.setState({ emailError: true, error: true });
      e.preventDefault();
    } else if (this.state.password === '') {
      this.setState({ passwordError: true, error: true });
      e.preventDefault();
    } else {
      this.props.requestSignup({
        redirect: () => this.props.history.push('/login'),
        data: {
          name: this.state.name,
          email: this.state.username,
          password: this.state.password      
        },
      });
    }
    e.preventDefault();
    this.setState({ username: '', password: '' , name:''});
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} error={this.state.error}>
        <Form.Field error={this.state.nameError}>
          <label>Name</label>
          <input name="name" onChange={e => this.setState({ name: e.target.value })} value={this.state.name} placeholder="Name" />
        </Form.Field>
        <Form.Field error={this.state.emailError}>
          <label>Email</label>
          <input name="username" onChange={e => this.setState({ username: e.target.value })}  placeholder="Email" />
        </Form.Field>
        <Form.Field error={this.state.passwordError}>
          <label>Password</label>
          <input name="password" onChange={e => this.setState({ password: e.target.value })}  placeholder="Password" type="password" />
        </Form.Field>
        <Message
          error
          header="Error"
          content="All fields are compulsory !"
        />
        <Button type="submit">Sign up</Button>
      </Form>
    );
  }
}

SignupPage.defaultProps = {
  requestSignup: () => ({}),
};

SignupPage.propTypes = {
  requestSignup: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
