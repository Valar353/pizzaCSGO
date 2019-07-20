import React from 'react';
import style from './SkinInfo.module.scss';
import ReactSVG from "react-svg";
import coinIcon from "../../img/svg/coinIcon.svg";

export default class SkinInfo extends React.Component {
    render() {
        const {item, info, cost,} = this.props.game;
        const urlSkin = 'https://cdn.csgo.com/item/' + item.trim() + ' (' + info.trim() + ')/300.png';

        let contentGame = (
            <div className={style.gameItem}>
                <div className={style.lootInfo}>
                    <div className={style.title}>
                        <p className={style.item}>{item}</p>
                        <p className={style.wear}>{info}</p>
                    </div>
                    <div className={style.skinAndCost}>
                        <img className={style.skin} src={urlSkin}/>
                        <div className={style.cost}>
                            <div>{cost}</div>
                            <div className={'svg ' + style.svgCoin}><ReactSVG src={coinIcon} /></div>
                        </div>
                    </div>
                </div>


            </div>
        );
        return (
            <div className={style.game}>
                {contentGame}
            </div>
        );
    }


}