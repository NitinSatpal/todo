import React from 'react';
import { Card } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import TaskCard from './TaskCard';

const TaskList = ({ tasks }) => (
  <Card.Group itemsPerRow={1}>
    {tasks.map(task => TaskCard(task))}
  </Card.Group>
);

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    task: PropTypes.string.isRequired
  })).isRequired,
};

export default TaskList;
