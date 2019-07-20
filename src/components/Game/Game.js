import React from 'react';
import style from './Game.module.scss';
import pizza from "../../img/pizza.png";
import axios from "axios";
import {API_URL} from "../../redux/constant";
import qs from "qs";
import {store} from "../../redux/Store";
import {actionAddVoting, actionUpdateGameList, actionUpdateGameListAndBalance} from "../../redux/action";
import coin from '../../img/coin.svg';
import currentGameIcon from "../../img/currentGame.svg";
import ReactSVG from "react-svg";
import coinIcon from "../../img/svg/coinIcon.svg";

export default class Game extends React.Component {

    voting = (nVote, nGame) => {
        const data = {'nVote': +nVote, 'nGame': +nGame, 'steamId': this.props.user.steamID};
        // console.log(data);
        // console.log(store.getState());

        axios({
            method: 'post',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: API_URL + '/api/games/addVote.php',
            data: qs.stringify(data)
        })
            .then(response => {
                if (typeof response.data === 'object') {
                    // console.log(response.data);
                    // console.log(store.getState());

                    const gameState = response.data.gameState;
                    const balance = response.data.balance;
                    console.log(gameState);
                    store.dispatch(actionUpdateGameListAndBalance(gameState, balance));

                    // console.log(response.data);
                    // if(response.data.finishedGame){
                    //     console.log('fineshed');
                    //    // // store.dispatch(actionUpdateGameList(gameState));
                    //    //  setTimeout(()=>{store.dispatch(actionUpdateGameList(gameState));}, 10000);
                    // }else{
                    //     store.dispatch(actionUpdateGameListAndBalance(gameState, balance));
                    // }
                    // store.dispatch(actionUpdateGameList(gameState));
                    // store.dispatch(actionAddVoting(response.data));//обновлять баланс
                } else {
                    //выводить ошибку
                    console.log(response.data);
                }


            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        // console.log(this.props.game);
        const {item, info, vote, needVote, cost, nGame, yourVote, end, winner} = this.props.game;
        // this.end = +this.props.game.end;
        // console.log(nGame);

        // console.log(this.props);
        const urlSkin = 'https://cdn.csgo.com/item/' + item.trim() + ' (' + info.trim() + ')/300.png';
        // console.log(this.props.game);
        // console.log(this.props.user.steamID);
        let contentGame = '';
        // console.log(this.props.game);
        if (+end) {
            console.log('игра окончена');

            contentGame = (
                <div>
                    выйграл игрок {winner}
                </div>
            );
        } else {
            // console.log('игра продолжается');

            contentGame = (
                <div className={style.gameItem}>
                    <div className={style.gameInfo}>
                        <p> Всего участников <strong>{vote}/{needVote}</strong></p>
                        {/*<div>стоимость 1 голоса {cost}</div>*/}
                        {/*<div>ваших голосов {yourVote}</div>*/}
                        <img className={style.gameDiagram} src={pizza}/>
                    </div>
                    <div className={style.lootInfo}>
                        <p className={style.item}>{item}</p>
                        <p className={style.wear}>{info}</p>
                        <img className={style.skin} src={urlSkin}/>
                        <div className={style.cost}>
                            <div>{cost}</div>
                            <div className={'svg ' + style.svgCoin}><ReactSVG src={coinIcon} /></div>
                        </div>
                        <div className={style.voting} onClick={() => {
                            this.voting(1, nGame)
                        }}>Участвовать
                        </div>
                    </div>


                </div>
            );
        }
        return (
            <div className={style.game}>
                {contentGame}
            </div>
        );
    }


}