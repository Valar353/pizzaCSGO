import React from 'react';
import style from './Content.module.scss';
import Chat from "../../containers/ChatContainer";
import Game from "../Game/Game";
import ReactSVG from 'react-svg';
import currentGameIcon from '../../img/svg/currentGameIcon.svg';
import Banner from "../Banner/Banner";
import NextGameContainer from "../../containers/NextGameContainer";

export default class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const gameList = this.props.state.gameState.map((listItem) =>
            <Game key={listItem['nGame']} game={listItem} user={this.props.state.user}/>
        );
        return (
            <div>
                <Banner />
                <div className='ContentContainer'>
                    <div className={style.gameList}>
                        <div className={style.gameTitle}>
                            <div className='svg svgFill'><ReactSVG src={currentGameIcon}/></div>
                            Текущие игры
                        </div>
                        {gameList}
                    </div>
                    <div className={style.wrapperChat}>
                        <Chat/>
                    </div>
                </div>
                <NextGameContainer />
            </div>
        );
    }


}