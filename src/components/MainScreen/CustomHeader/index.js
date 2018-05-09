import CustomHeader from './CustomHeader';
import { connect } from 'react-redux';
import { signOutRequest } from '../../../redux/actions/entities/authenticateActions';

function mapDispatchToProps (dispatch) {
    return {
        signOut: () => dispatch(signOutRequest())
    }
}

export default connect(null, mapDispatchToProps)(CustomHeader);
