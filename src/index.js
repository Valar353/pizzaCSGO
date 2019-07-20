import React from 'react';
import ReactDOM from 'react-dom';
// import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from 'react-redux';
// import thunk from 'redux-thunk';
import cookie from 'react-cookies';
import './index.scss';
import AppContainer from './containers/AppContainer';
// import * as serviceWorker from './serviceWorker';
import {store} from './redux/Store';
import {actionUpdateGameList} from './redux/action';
import {actionInitUser} from './redux/action';
import axios from "axios";
import {API_URL} from "./redux/constant";
// import qs from "qs";


// console.log(cookie.load('steamid') !== 'undefined');


//
// user = {
//     steamID: '76561198119391039',
//     id: 283,
//     userInventory: []
// }
// console.log(store.getState());
// store.dispatch(actionInitUser({user}));
// console.log(typeof cookie.load('steamid'));
// console.log(typeof cookie.load('steamid') !== 'undefined');
// console.log(store.getState());
initState();
// console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


function initState() {
    axios({
        method: 'post',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        url: API_URL + '/api/games/updateGameList.php',
        })
        .then(response => {
            // console.log(response.data);
            let currentGame =[];
            let nextGame = [];
            response.data.map((item)=>{
                if(+item.start){
                    currentGame.push(item);
                }else{
                    nextGame.push(item);
                }
            });
            // const gameState = response.data.gameState;
            // console.log(currentGame);
            // console.log(nextGame);
            store.dispatch(actionUpdateGameList(currentGame, nextGame));
            // store.dispatch(actionAddVoting(response.data));

        })
        .catch(function (error) {
            console.log(error);
        });
    // axios({
    //     method: 'post',
    //     headers: {'Content-Type': 'application/x-www-form-urlencoded'},
    //     url: API_URL + '/api/games/updateNextGameList.php',
    //     })
    //     .then(response => {
    //         // console.log(response.data);
    //         // const gameState = response.data.gameState;
    //         // console.log(gameState);
    //         store.dispatch(actionUpdateGameList(response.data));
    //         // store.dispatch(actionAddVoting(response.data));
    //
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });

    if (typeof cookie.load('steamid') !== 'undefined') {
        let user = {
            isGuest: false,
            //Steam api
            steamImg: cookie.load('avatar'),
            steamID: cookie.load('steamid') === undefined ? 0 : cookie.load('steamid').toString(),
            steamName: cookie.load('personaname'),
            steamGuard: true,
            // steamGuard: cookie.load('personaname'),//НУЖНО ЛИ ЭТО?
            //SiteData
            tradeURL: cookie.load('tradeLink'),
            regDate: cookie.load('dateReg'),
            idSeller: cookie.load('idSeller'),
            balance: cookie.load('balance'),
            userInventory: []
        };
        store.dispatch(actionInitUser({user}));
    }
    // let socket = new WebSocket('ws://' + API_URL_LOCAL + '/api/games/updateGameList.php');
    // socket.onopen = () =>{
    //     console.log('соединение установлено');
    // };
    // socket.onclose = () =>{
    //     console.log('соединение закрыто');
    //
    // };
    // socket.onerror = (event) =>{
    //     console.log(event);
    // };
}