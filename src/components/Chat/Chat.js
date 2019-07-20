import React from 'react';
import style from './Chat.module.scss';
import axios from "axios";
import qs from "qs";
import {store} from "../../redux/Store";
import {actionChangeMessage, actionUpdateListMessage} from "../../redux/action";
import SignIn from "../SignIn/SignIn";
import {API_URL} from "../../redux/constant";
import ReactSVG from 'react-svg';
import onlineIcon from '../../img/svg/onlineIcon.svg';


class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.scroll = false;
    }

    componentDidMount() {
        // this.requestToChat();
        this.interval = setInterval(()=>{this.requestToChat()}, 500);
        // setTimeout(()=>{this.scrollToBottom();}, 1000);

    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    scrollToBottom() {
        this.el.scrollTo(0,this.el.scrollHeight);
        if(!this.scroll){
            this.scroll = true;

        }
    }

    requestToChat = () => {
        // console.log('updateChat');
        axios({
            method: 'post',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: API_URL + '/api/chat/chat.php',
        })
            .then(response => {
                // console.log(response.data);
                if (response.data) {
                    let result = [];
                    response.data.forEach((item) => {
                        result.push([item.id, item.personalName, item.personalImg, item.message]);
                    });
                    let arr = this.props.state.chatList;
                    result = result.reverse();
                    // console.log(result[0][0] !== arr[0][0]);
                    if(result[0][0] !== arr[0][0]){
                        store.dispatch(actionUpdateListMessage(result));
                    }

                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    handleChange = (event) =>  {
        store.dispatch(actionChangeMessage(event.target.value));
    };

    pressEnter = (event) =>  {
        if (event.key === 'Enter') {
            event.preventDefault();
            this.sendMessage(event, event.target.value);
        }
    };

    sendMessage = (event, message = event.target.message.value) => {
        event.preventDefault();
        const {steamName, steamImg} = this.props.state.user;
        const data = {'message': message, 'personalName': steamName, 'personalImg': steamImg};
        console.log(data);

        axios({
            method: 'post',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: API_URL + '/api/chat/chatGetMessage.php',
            data: qs.stringify(data)
        })
            .then(response => {
                console.log(response.data);
                if (response.data) {
                    store.dispatch(actionChangeMessage(''));
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {

        let chatList;
        if(this.props.state.chatList){
             chatList= this.props.state.chatList.map((listItem, i) =>{
                 // console.log(listItem);
                return(
                    <div key={listItem[0]} className={style.chatItem}>
                        <img className={style.chatItem_img} src={listItem[2]}/>
                        <div className={style.chatItem_name}>{listItem[1]}</div>
                        <div className={style.chatItem_message}>{listItem[3]}</div>
                    </div>
                );
        });
        }

        let chatInput;
        if (this.props.state.user.isGuest) {
            chatInput = (
                <SignIn />
            );
        } else {
            chatInput = (
                <form onSubmit={this.sendMessage}>
                    <textarea className={style.chatInput_text} value={this.props.state.myMessage} name='message'
                              maxLength='120' onKeyPress={this.pressEnter} onChange={this.handleChange}/>
                    <button className={style.chatInput_buttonSend}><div className={style.arrow}> </div></button>
                </form>
            );
        }

        return (
            <div className={style.chat}>
                <div className={style.title}>

                    <div className={style.titleOnline}>
                        <div className={'svg '}><ReactSVG src={onlineIcon} /></div>
                        <div>Чат</div>
                    </div>
                    <div className={style.online}>322 Онлайн</div>
                </div>
                <div className={style.chatList} ref={el => { this.el = el; }}>
                    {chatList}
                </div>
                <div className={style.chatInput}>
                    {chatInput}
                </div>
            </div>
        );
    }


}

export default Chat;
