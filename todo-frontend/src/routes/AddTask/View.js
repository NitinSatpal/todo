import React, { Component } from 'react';
import { Button, Form, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class AddTask extends Component {

  constructor(props) {
    super(props);
    this.state = { nameError: false, error: false, task: '' };
  }

  handleSubmit = (e) => {
    const task = this.state.task.trim();
    if (task === '') {
      this.setState({ nameError: true, error: true });
    } else {
      this.props.requestCreateTask({
        redirect: id => this.props.history.push(`/profile/tasks`),
        data: {
          task
        },
      });
    }
    e.preventDefault();
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} error={this.state.error}>
        <Form.Field error={this.state.nameError} >
          <label>Task</label>
          <input value={this.state.task} name="task" onChange={e => this.setState({ task: e.target.value })} placeholder="What's need to be done?" />
        </Form.Field>
        <Message
          error
          header="Error"
          content="To do Task is required"
        />
        <Button type="submit">Submit</Button>
      </Form>
    );
  }
}

AddTask.defaultProps = {
  requestCreateTask: () => ({}),
};

AddTask.propTypes = {
  requestCreateTask: PropTypes.func,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
