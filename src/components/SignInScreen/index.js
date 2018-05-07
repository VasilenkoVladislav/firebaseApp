import { connect } from 'react-redux';
import SignInScreen from './SignInScreen';
import { signInRequest } from '../../redux/actions/entities/authenticateActions';

function mapDispatchToProps (dispatch) {
    return {
        signIn: (email, password) => dispatch(signInRequest(email, password))
    }
}

export default connect(null, mapDispatchToProps)(SignInScreen);
