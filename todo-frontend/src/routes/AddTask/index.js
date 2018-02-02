import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestCreateTask } from '../../modules/task/actions';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestCreateTask,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
