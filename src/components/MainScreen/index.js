import { connect } from 'react-redux';
import { getPositionState } from '../../redux/selectors/entities/positionSelectors';
import MainScreen from './MainScreen';

function mapStateToProps (state) {
    return {
        position: getPositionState(state)
    }
}

export default connect(mapStateToProps)(MainScreen);
