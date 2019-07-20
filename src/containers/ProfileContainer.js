import React from 'react';
import { connect } from 'react-redux';
import Profile from "../components/Profile/Profile";

function ProfileContainer(props) {
    return (
        <Profile user={props} />
    )
}
const mapStateToProps = function(state) {
    return state.user
}

export default connect(mapStateToProps)(ProfileContainer);