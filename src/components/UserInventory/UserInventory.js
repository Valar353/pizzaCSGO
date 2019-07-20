import React from 'react';
import axios from 'axios';
import qs from 'qs';
import {API_URL} from "../../redux/constant";
import {store} from '../../redux/Store';
import {actionUpdateUserInventory} from "../../redux/action";
import style from "./UserInventory.module.scss";
import ReactSVG from "react-svg";
import refreshIcon from "../../img/svg/refreshIcon.svg";

export default class UserInventory extends React.Component {
    constructor(props) {
        super(props);
        this.steamId = this.props.user.steamID;
    }

    componentDidMount() {
        // console.log(this.props.user);
        this.updateInventory();
    }

    updateInventory = () => {
        const data = {steamId: this.steamId};
        // console.log(data);
        axios({
            method: 'post',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: API_URL+ '/api/inventory.php',
            data: qs.stringify(data)
        })
            .then(response => {
                // console.log(response.data);
                store.dispatch(actionUpdateUserInventory(response.data));

            })
            .catch(function (error) {
                console.log(error);
            });
    };

    output = () =>{

    };

    render() {
        const invLength = this.props.user.userInventory.length;
        let skinList;
        if (invLength > 0) {
            skinList = this.props.user.userInventory.map((listItem) => {
                const urlSkin = 'https://cdn.csgo.com/item/AK-47 | Красная линия (После полевых испытаний)/300.png';

                return (
                    <div key={listItem['idSkin']} className={style.item}>
                        <div className={style.skinInfo}>
                            <div className={style.skinName}>{listItem['skinName']}</div>
                            <div className={style.skinDescription}>{listItem['skinName']}</div>
                            <img className={style.skinImg} src={urlSkin}/>
                        </div>
                        <div className={style.output} onClick={() => {
                            this.output(listItem['idSkin'])
                        }}>Вывести
                        </div>
                    </div>
                )
            });
        } else {
            skinList = 'ваш инвентарь пуст';
        }

        return (
            <div className={style.inventoryWrapper}>
                {skinList}
                <div className={style.updateInventory + ' svg svgFill '} onClick={this.updateInventory}><ReactSVG src={refreshIcon} /> </div>
            </div>
        );
    }


}