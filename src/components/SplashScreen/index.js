import { connect } from 'react-redux';
import SplashScreen from './SplashScreen';
import { syncUser } from '../../redux/actions/entities/authenticateActions';

function mapDispatchToProps (dispatch) {
    return {
        syncUser: () => dispatch(syncUser())
    }
}

export default connect(null, mapDispatchToProps)(SplashScreen);