import React from 'react';
import { Card } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const TaskCard = ({ _id, task, history }) => (
    <Card
    centered
    header={task}
    onClick={() => history.push(`/view/${_id}`)}
    key={_id}
  />

);
TaskCard.defaultProps = {
  history: {},
};

TaskCard.propTypes = {
  _id: PropTypes.string.isRequired,
  task: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
};

export default withRouter(TaskCard);
