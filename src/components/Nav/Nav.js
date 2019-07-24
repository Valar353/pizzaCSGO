import React from 'react';
import style from './Nav.module.scss';
import {actionChangeOption} from "../../redux/action";
import {store} from "../../redux/Store";
import FAQ from '../../img/FAQ.svg';
import menuIcon from '../../img/svg/menuIcon.svg';
import market from '../../img/svg/market.svg';
import Balance from "../Balance/Balance";
import SignIn from "../SignIn/SignIn";
import {LINK_TRADE_OFFER} from "../../redux/constant";
import ReactSVG from "react-svg";
import onlineIcon from "../../img/svg/onlineIcon.svg";

export default class Nav extends React.Component {
    constructor(props) {
        super(props);
        this._isGuest = this.props.user.isGuest;
        this._steamImg = this.props.user.steamImg;
        // this._steamImg = 'https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/22/22fd4dfad67f90dd0df902314b0c116ba3aec73b.jpg';
        this._steamName = this.props.user.steamName;
        this._button = null;
        this._root = document.querySelector(':root');
        this._rootStyles = getComputedStyle(this._root);
        this._blackTheme = ['#21252c', '#292e35', '#373d49', '#2e343d', '#1c1f22', '#2f353d', '#5d984b', 'white', '#3f4754'];
        this._whiteTheme = ['#e4e4e4', '#ffffff', '#e4e4e4', '#e4e4e4', '#f4f4f4', '#ffffff', '#5d984b', 'black', '#3f4754'];
        this._theme = 'black';
    }

    clickProfile = () => {
        store.dispatch(actionChangeOption('showProfile'));
    };
    changeTheme = () => {
        // console.log(this._rootStyles.getPropertyValue('--theme'));
        let salf;
        // if(this._rootStyles.getPropertyValue('--theme').trim() === 'black'){
        if (this._theme === 'black') {
            this._root.style.setProperty('--theme', 'white');
            salf = this._whiteTheme;
            this._theme = 'white';
        } else {
            this._root.style.setProperty('--theme', 'black');
            salf = this._blackTheme;
            this._theme = 'black';

        }
        this._root.style.setProperty('--mainColor', salf[0]);
        this._root.style.setProperty('--sideColor', salf[1]);
        this._root.style.setProperty('--bgSideColor', salf[2]);
        this._root.style.setProperty('--bgField', salf[3]);
        this._root.style.setProperty('--bgColor', salf[4]);
        this._root.style.setProperty('--bgChat', salf[5]);
        this._root.style.setProperty('--stemButton', salf[6]);
        this._root.style.setProperty('--mainText', salf[7]);
        this._root.style.setProperty('--mutedText', salf[8]);
        this.forceUpdate();

    };

    render() {
        this.balance = +this.props.user.balance;
        if (this._isGuest) {
            this._button = <SignIn/>
        } else {
            this._button =
                <div className={style.profileShort}>
                    <div className={style.balance}><Balance cost={this.balance} style={'#373d49'}/></div>
                    <div className={style.personalName}>{this._steamName}</div>

                    <img className={style.personalAvatar} alt='steam avatar' src={this._steamImg}/>
                    <div className={'svg svg40 '+style.buttonCollapse}><ReactSVG src={menuIcon} /></div>

                    <div className={style.profileMenu}>
                        <div className={style.menuCollapse}>
                            <div onClick={this.clickProfile}>Личный кабинет</div>
                            <div><a href={LINK_TRADE_OFFER}>Ссылка на обмен</a></div>
                            <div className={style.collapseItem}><a href='/'>Маркет</a></div>
                            <div className={style.collapseItem}><a href='/'>FAQ</a></div>
                            <div>
                                <form action='' method='get'>
                                    <button name='logout' type='submit'>Выход</button>
                                </form>
                            </div>
                        </div>
                        {/*<div className={style.menuCollapse}></div>*/}
                    </div>
                </div>

        }
        if (this._theme !== 'black') {
            this.theme = <div onClick={this.changeTheme} className={style.changeTheme + ' ' + style.changeBlack}/>;
        } else {
            this.theme = <div onClick={this.changeTheme} className={style.changeTheme}/>;
        }
        return (
            <div className={style.nav}>
                <div className={style.navItem}>
                    <a href="/">
                        <div className={'svg ' + style.IconItem}><ReactSVG src={FAQ}/></div>
                        FAQ
                    </a>
                </div>
                <div className={style.navItem}>
                    <a href="/">
                        <div className={'svg ' + style.IconItem + ' '+style.market}><ReactSVG src={market}/></div>
                        Маркет
                    </a>
                </div>
                <div className={style.navItem} style={{margin: "3px 0 0 0"}}>
                    {this.theme}
                </div>
                <div className={style.navItem}>
                    {this._button}
                </div>

            </div>
        );
    }


}