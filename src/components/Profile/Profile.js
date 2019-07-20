import React from 'react';
import style from './Profile.module.scss';
// import balanceAddSvg from "https://svgsilh.com/svg/1721865.svg";
import {API_URL, LINK_TRADE_OFFER} from '../../redux/constant';
import {store} from "../../redux/Store";
import {actionChangeOption, actionChangeTradeLink} from "../../redux/action";
import axios from 'axios';
import qs from 'qs';
import UserInventory from "../../containers/UserInventoryContainer";
import ButtonCloseModule from "../ButtonModule/ButtonCloseModule";
import personalAreaIcon from "../../img/personalArea.svg";
// import cancelIcon from "../../img/cancel.svg";
import Balance from "../Balance/Balance";
import ReactSVG from "react-svg";
import fillBalance from "../../img/svg/fillBalance.svg";

// import cookie from "react-cookies";
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this._balance = this.props.user.balance;
        this._steamImg = this.props.user.steamImg;
        this._steamName = this.props.user.steamName;
        this._steamID = this.props.user.steamID;
        this._isGuest = this.props.user.isGuest;
        this._regDate = this.props.user.regDate;
        this._steamGuard = this.props.user.steamGuard;
        this._tradeLink = this.props.user.tradeLink;

        // {this._balance, this._steamImg, this._steamName, this._steamID, this._isGuest, this._tradeURL, this._regDate} = this.props.user;
        this._tradePlaceholder = 'https://steamcommunity.com/tradeoffer/';
        // console.log(this._isGuest);
    }

    changeTradeLink = (event) => {
        event.preventDefault();

        const link = event.target.tradeLink.value;
        const data = {'tradeURL': link, 'id': this._steamID};

        axios({
            method: 'post',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            url: API_URL + '/api/changeTradeLink.php',
            data: qs.stringify(data)
        })
            .then(response => {
                console.log(response.data);
                store.dispatch(actionChangeTradeLink(response.data));

            })
            .catch(function (error) {
                console.log(error);
            });
    };

    render() {
        const {steamImg} = this.props.user;
        // this._tradeLink = this.props.user;

        // console.log( this._tradeLink.tradeLink);
        console.log(this.props.user);
        return (
            <div className={style.profile}>
                <ButtonCloseModule/>
                <div className={style.info}>
                    <div className={style.title}>
                        <img className={style.personalAvatar} alt='steam avatar' src={this._steamImg}/>
                        <div className={style.personalName}>{this._steamName}</div>
                    </div>
                    <div className={style.balanceBlock}>
                        <div>
                            {/*<Balance cost={this._balance} />*/}
                            <Balance cost={this._balance}/>
                            {/*<p className={style.balanceCurrency}>$</p>*/}
                            {/*<p className={style.balanceCurrent}>{this._balance}</p>*/}
                        </div>
                        {/*<div className={style.balanceAdd}>*/}
                            <a href='/'>
                                <div className={style.fillBalance + ' svg svgFill '} onClick={this.closeModule}><ReactSVG src={fillBalance} /> </div>
                            </a>
                        {/*</div>*/}
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.personalData}>
                        <div>
                            <div>Trade URL</div>
                            <div className={style.tradeLink}>
                                <form onSubmit={this.changeTradeLink}>
                                    <input type='text' name="tradeLink" placeholder={this._tradePlaceholder}
                                           defaultValue={this._tradeLink}
                                           autoComplete="off"
                                    />
                                    <button>Применить</button>
                                    <a href={LINK_TRADE_OFFER} rel="noopener noreferrer" target='_blank'>Получить
                                        ссылку</a>
                                </form>
                            </div>
                        </div>
                        <div className={style.steamInfo}>
                            <div className={style.dataItem}>
                                <div className={style.title}>Steam ID</div>
                                <div className={style.value}>{this._steamID}</div>
                            </div>
                            <div className={style.dataItem}>
                                <div className={style.title}>Регистрация</div>
                                <div className={style.value}>{this._regDate}</div>
                            </div>
                            <div className={style.dataItem}>
                                <div className={style.title}>Steam Guard</div>
                                <div className={style.value}>{this._steamGuard?'Активирован':'Не активирован'}</div>
                            </div>

                        </div>
                    </div>

                    <div className={style.siteInfo}>
                        <div className={style.title}>
                            <div className={style.active}>Инвентарь</div>
                            <div>Пополнение</div>
                            <div>Вывод</div>
                        </div>
                        <div>
                            <div className={style.inventory}>
                                <UserInventory />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }


}


