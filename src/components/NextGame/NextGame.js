import React from 'react';
import style from './NextGame.module.scss';
import SkinInfo from "../SkinInfo/SkinInfo";
import ReactSVG from "react-svg";
import nextGameIcon from "../../img/svg/nextGameIcon.svg";

export default class NextGame extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let gameList;
        if (this.props.nextGame.length > 0) {
            gameList = this.props.nextGame.list.map((listItem) =>
                <SkinInfo key={listItem['nGame']} game={listItem}/>
            );
        } else {
            gameList = 'В данные момент розыгрыши не планируются';
        }
        return (
            <div className='ContentContainer'>
                <div className={style.gameList}>
                    <div className={style.title}>
                        <div className=' svg  svgFill '  onClick={this.closeModule}><ReactSVG src={nextGameIcon} /> </div>
                        Следующие игры
                    </div>
                    <div className={style.skin}>
                        {gameList}
                    </div>
                </div>
            </div>
        );
    }


}