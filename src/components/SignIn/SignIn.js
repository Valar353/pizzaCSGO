import React from 'react';
import style from './SignIn.module.scss';
import SteamLogo from '../../img/SteamLogo.svg';
import ReactSVG from "react-svg";

export default class SignIn extends React.Component {

    render() {

        return (
            <a href="?login" className={style.navItem + ' ' + style.authButton}>
                <div className={'svg '+style.steamIconButton}><ReactSVG src={SteamLogo} /></div>
                <div className={style.buttonText}>Войти через Steam</div>
            </a>
        );
    }


}