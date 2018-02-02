import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import View from './View';
import { editProfile, deleteProfile } from '../../modules/user/actions';


function mapStateToProps(state) {
  return {
  	user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  	editProfile,
  	deleteProfile
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(View);
