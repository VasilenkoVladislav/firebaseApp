import App from './App';
import { connect } from 'react-redux';
import { getNavState } from '../../redux/selectors/nav';

function mapStateToProps (state) {
    return {
        nav: getNavState(state)
    }
}

export default connect(mapStateToProps)(App);