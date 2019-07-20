import React from 'react';
import style from './SignIn.module.scss';
import SteamLogo from '../../img/SteamLogo.svg';

export default class SignIn extends React.Component {

    render() {

        return (
            <a href="?login" className={style.navItem + ' ' + style.authButton}>
                <embed src={SteamLogo} className={style.SteamIconButton}/>
                <div >Войти через Steam</div>
            </a>
        );
    }


}