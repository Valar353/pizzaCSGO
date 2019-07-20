import React from 'react';
import style from './Banner.module.scss';
import ButtonBanner from "../ButtonModule/ButtonBanner";

export default class Banner extends React.Component {
    constructor(props){
        super(props);
        this.maxN = 2;
        this.nBanner = 0;
    }
    changeNBanner = (action) => {
        if(action){
            if(this.nBanner < this.maxN){this.nBanner++;}else{this.nBanner = 0;}
        }else{
            if(this.nBanner > 0){this.nBanner--;}else{this.nBanner = this.maxN;}
        }
        this.forceUpdate();
    };
    render() {
        const number = this.nBanner;
        let b1,b2,b3;
        if(number===0){b1 = <div className={style.Item +' '+ style.active} />}else{b1 = <div className={style.Item} />}
        if(number===1){b2 = <div className={style.Item +' '+ style.active} />}else{b2 = <div className={style.Item} />}
        if(number===2){b3 = <div className={style.Item +' '+ style.active} />}else{b3 = <div className={style.Item} />}

        return (
            <div className={style.bannerWrapper}>
                <div className={style.banner + ' ' + 'ContentContainer'}>
                    <div onClick={()=>{this.changeNBanner(false)}}><ButtonBanner style={'left'}/>

                    </div>
                    <div onClick={()=>{this.changeNBanner(true)}}><ButtonBanner style={'right'}/></div>
                    <div className={style.bannerNav}>
                        {b1}
                        {b2}
                        {b3}
                    </div>
                    <div className={style.wrapperContainer}>
                        <div className={style.container} style={{transform:'translateX(-'+ 100 * this.nBanner +'%)'}}>
                            <a href='https://vk.com/pizzacsgo' > </a>
                            <a href='/'>test 1</a>
                            <a href='/'>test 2</a>
                        </div>
                    {/*    Вступайте в нашу группу вк*/}
                    </div>
                </div>
            </div>
        );
    }


}