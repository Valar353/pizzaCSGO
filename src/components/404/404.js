import React from 'react';
import style from './notFound.module.scss';
import ReactSVG from "react-svg";
import notFound from "../../img/svg/notFound.svg";


export default class App extends React.Component {
    render() {
        return (
            <div className={style.wrapper}>
                <h1>404</h1>
                <h2>Пицца не найдена.</h2>
                <div className={'svg ' + style.svg}><ReactSVG src={notFound} /></div>

            </div>
        );
    }


}