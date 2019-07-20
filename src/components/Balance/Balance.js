import React from 'react';
import style from './Balance.module.scss';
import ReactSVG from "react-svg";
import coinIcon from "../../img/svg/coinIcon.svg";

export default class Balance extends React.Component {
    render() {
        return (
            <div className={style.balanceWrapper}>
                <div className={style.title}>Баланс: </div>
                <div className={style.cost} style={{background:this.props.style}}>
                    <div>{this.props.cost}</div>
                    <div className={'svg ' + style.svgCoin}><ReactSVG src={coinIcon} /></div>
                </div>
            </div>
        );
    }


}