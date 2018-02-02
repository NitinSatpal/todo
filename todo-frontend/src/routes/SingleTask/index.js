import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestTask } from '../../modules/task/actions';
import { deleteTask } from '../../modules/task/actions';
import { editTask } from '../../modules/task/actions';


function mapStateToProps(state) {
  return {
    currTask: state.currTask,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestTask,
    deleteTask,
    editTask,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
