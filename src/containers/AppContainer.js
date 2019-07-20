import React from 'react';
import { connect } from 'react-redux';
import App from '../components/App/App';

function AppContainer(props) {
    return (
        <App state={props} />
    )
}
const mapStateToProps = function(state) {
    return {
        isGuest: state.user.isGuest,
        steamID: state.user.steamID,
        options: state.options
    }
}

export default connect(mapStateToProps)(AppContainer);