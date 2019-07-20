import React from 'react';
import style from './ButtonModule.module.scss';
import ReactSVG from "react-svg";
import arrowIcon from "../../img/svg/arrowIcon.svg";

export default class ButtonBanner extends React.Component {
    render() {
        let classs;
        if(this.props.style === 'left'){
            classs = style.arrowLeft;
        }else{
            classs = style.arrowRight;
        }
        return (
                <div className={style.arrow + ' svg svg40 svgFill ' + classs} onClick={this.closeModule}><ReactSVG src={arrowIcon} /> </div>
        );
    }


}