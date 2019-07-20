import React from 'react';
import { connect } from 'react-redux';
import Dashboard from '../components/AdminPanel/Dashboard';

function DashboardContainer(props) {
    return (
        <Dashboard state={props} />
    )
}
const mapStateToProps = function(state) {
    return state
}

export default connect(mapStateToProps)(DashboardContainer);