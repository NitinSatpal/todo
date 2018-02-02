import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { requestMyTasks } from '../../modules/task/actions';

function mapStateToProps(state) {
  return {
    myTasks: state.myTasks,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    requestMyTasks,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
