import { connect } from 'react-redux';
import { getUserIsLoadingState } from '../../redux/selectors/entities/userSelectors';
import SignInScreen from './SignInScreen';
import { signInRequest } from '../../redux/actions/entities/authenticateActions';

function mapStateToProps (state) {
    return {
        isLoading: getUserIsLoadingState(state)
    }
}

function mapDispatchToProps (dispatch) {
    return {
        signIn: (email, password) => dispatch(signInRequest(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);
