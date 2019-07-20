import React from 'react';
import { connect } from 'react-redux';
import Chat from "../components/Chat/Chat";

function ChatContainer(props) {
    return (
        <Chat state={props} />
    )
}
const mapStateToProps = function(state) {
    return {
        user: state.user,
        myMessage: state.myMessage,
        chatList: state.chatList,

    }
}

export default connect(mapStateToProps)(ChatContainer);