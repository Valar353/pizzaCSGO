import React from 'react';
import { connect } from 'react-redux';
import UserInventory from "../components/UserInventory/UserInventory";

function UserInventoryContainer(props) {
    return (
        <UserInventory user={props} />
    )
}
const mapStateToProps = function(state) {
    return state.user;
}

export default connect(mapStateToProps)(UserInventoryContainer);