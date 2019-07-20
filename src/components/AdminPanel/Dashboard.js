import React from 'react';
import style from './Dashboard.module.css';
import {API_URL} from "../../redux/constant";
import axios from "axios";
import qs from "qs";
import {store} from "../../redux/Store";
import {actionChangeMessage} from "../../redux/action";

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.nGame = 0;
    }

    createGame = (e) => {
        e.preventDefault();
        const data = {
            'cost': this.cost.value,
            'needVote': this.needVote.value,
            'item': this.item.value,
            'info': this.info.value,
            'nBot': this.nBot.value,
            'idItem': this.idItem.value,
        };
        // console.log(data);

        axios({
            method: 'post',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            url: API_URL + '/api/games/createGame.php',
            data: qs.stringify(data)
        })
            .then(response => {
                console.log(response.data);
                // if (response.data) {
                //     store.dispatch(actionChangeMessage(''));
                // }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        return (
            <div className={style.wrapper}>
                <form onSubmit={this.createGame}>
                    <input ref={(el) => this.cost = el} type='text' name="cost" placeholder='стоимость голоса'/>
                    <input ref={(el) => this.needVote = el} type='text' name="needVote" placeholder='сколько голосов нужно для розыгрыша'/>
                    <input ref={(el) => this.item = el} type='text' name="item" placeholder='название предмета'/>
                    <input ref={(el) => this.info = el} type='text' name="info" placeholder='качество предмета'/>
                    <input ref={(el) => this.nBot = el} type='text' name="info" placeholder='Номер бота'/>
                    <input ref={(el) => this.idItem = el} type='text' name="info" placeholder='id предмета'/>
                    <input type="submit" value="создать розыгрыш"/>
                </form>
            </div>
        );
    }


}

