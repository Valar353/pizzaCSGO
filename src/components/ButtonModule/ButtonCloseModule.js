import React from 'react';
import {store} from "../../redux/Store";
import style from './ButtonModule.module.scss';
import { actionCloseModule} from "../../redux/action";
import ReactSVG from "react-svg";
import closeIcon from "../../img/svg/closeIcon.svg";

export default class ButtonCloseModule extends React.Component {
    closeModule = () => {
        store.dispatch(actionCloseModule());
    };
    render() {
        return (
            <div className={style.closeOverlay + ' svg35 svg svgFill '} onClick={this.closeModule}><ReactSVG src={closeIcon} /> </div>
        );
    }


}