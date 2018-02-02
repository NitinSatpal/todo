import React, { Component } from 'react';
import { Header, Button, Form, Message } from 'semantic-ui-react';
import PropTypes from 'prop-types';

export default class SingleTask extends Component {

  constructor(props) {
    super(props);
    this.state = { editClicked: false, updatedTask : '', nameError: false, error: false, task: ''  };
  }
  
  componentWillMount() {
    this.props.requestTask(this.props.match.params.taskId);
  }

  openEditBox = (e) => {
    const task = this.props.currTask;
    this.setState({editClicked: true, updatedTask:  task.task});
  }

  cancelThisTask = (e) => {
    const task = this.props.currTask;
    this.setState({editClicked: false, updatedTask:  ''});
    this.props.history.push(`/view/${task._id}`);
  }

  updateThisTask = (e) => {
    if (this.state.updatedTask === '') {
      this.setState({ nameError: true, error: true });
      e.preventDefault();
    } else {
      e.preventDefault();
      console.log(JSON.stringify(this.props.match.params.taskId));
      console.log(JSON.stringify(this.state.updatedTask));
      this.props.editTask({
        redirect: () => this.props.history.push(`/profile/tasks`),
        id: this.props.match.params.taskId,
        data: {
          task: this.state.updatedTask,
        }
      });
    }
  }

  deleteThisTask = (e) => {
    this.props.deleteTask({
        redirect: () => this.props.history.push(`/profile/tasks`),
        data: this.props.match.params.taskId
      });
  }

  render() {
    const task = this.props.currTask;
    //this.setState({ updatedTask: e.target.value })
    if (!Object.prototype.hasOwnProperty.call(task, 'task')) {
      return (<p>Loading...</p>);
    }
    
    const showText = (
      <div>
        <Header as="h1" >{task.task}</Header>
        <Button basic color="green" onClick={this.openEditBox}>Edit</Button>
        <Button basic color="red" onClick={this.deleteThisTask}>Delete</Button>
      </div>
    )

    const showEditbox = (
      <Form onSubmit={this.updateThisTask} error={this.state.error}>
        <Form.Field error={this.state.nameError} >
          <input defaultValue={task.task} name="task" onChange={e => this.setState({ updatedTask: e.target.value })} />
        </Form.Field>
        <Message
          error
          header="Error"
          content="To do Task is required"
        />
        <Button type="submit">Submit</Button>
      </Form>
    )    

    return ( this.state.editClicked ? showEditbox : showText );
  }
}

SingleTask.defaultProps = {
  requestTask: () => ({}),
  deleteTask: () => ({}),
  editTask: () => ({}),
  currTask: {},
};

SingleTask.propTypes = {
  requestTask: PropTypes.func,
  deleteTask: PropTypes.func,
  editTask: PropTypes.func,
  currTask: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      taskId: PropTypes.string,
    }),
  }).isRequired,
};

