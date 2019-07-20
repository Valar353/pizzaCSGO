import React from 'react';
import { connect } from 'react-redux';
import Nav from '../components/Nav/Nav';

function NavContainer(props) {
    return (
        <Nav user={props} />
    )
}
const mapStateToProps = function(state) {
    return state.user;
}

export default connect(mapStateToProps)(NavContainer);