import React from 'react';
import style from './Footer.module.scss';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className={style.footer}>
                <div className={style.row}>
                    <div><Link to="/">Техподдержка</Link><a href='/'> </a></div>
                    <div><Link to="/">Контакты</Link><a href='/'> </a></div>
                    <div><Link to="/agreement">Соглашение</Link></div>
                    <div><Link to="/">Политика Конфиденциальности</Link></div>
                </div>
                    <div className={style.row}>
                    <div className={style.copyright}>2019 © PizzaCSGO</div>
                    <div className={style.notAffiliated}>
                        Домен не является частью экосистемы
                        сервиса Steam и Корпорации VALVE
                    </div>
                </div>
                </div>
            </footer>
        );
    }


}