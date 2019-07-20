import React from 'react';
import { connect } from 'react-redux';
import Content from "../components/Content/Content";

function ContentContainer(props) {
    return (
        <Content state={props} />
    )
}
const mapStateToProps = function(state) {
    return state;
}

export default connect(mapStateToProps)(ContentContainer);