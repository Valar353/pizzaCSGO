import React from 'react';
import { connect } from 'react-redux';
import NextGame from "../components/NextGame/NextGame";

function NextGameContainer(props) {
    return (
        <NextGame nextGame={props} />
    )
}
const mapStateToProps = function(state) {
    return state.nextGameState;
}

export default connect(mapStateToProps)(NextGameContainer);