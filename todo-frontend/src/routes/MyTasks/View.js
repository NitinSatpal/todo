import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TaskList from '../../components/TaskList';

export default class MyTasks extends Component {

  componentWillMount() {
    /* eslint-disable */
    this.props.requestMyTasks({
      query: {
        ownerId: this.props.user._id,
      },
    });
    /* eslint-enable */
  }

  render() {
    return (
          <TaskList tasks={this.props.myTasks} />
    );
  }
}

MyTasks.defaultProps = {
  requestMyTasks: () => ({}),
  user: {},
  myTasks: [],
};

MyTasks.propTypes = {
  requestMyTasks: PropTypes.func,
  user: PropTypes.shape({
    _id: PropTypes.string,
    email: PropTypes.string,
  }),
  myTasks: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired
  })),
};
