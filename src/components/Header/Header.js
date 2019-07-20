import React from 'react';
import style from './Header.module.scss';
import logo from "../../img/1Logo.svg";
import Nav from '../../containers/NavContainer';

class Header extends React.Component {
    render() {
        return (
            <div className={style.headerWrapper}>
                <div className={style.header}>
                    <div className={style.headerLogo}>
                        <a href='/'>
                            <img src={logo} alt="logo"/>
                            <h1>PizzaCSGO</h1>
                        </a>
                    </div>
                    <Nav/>
                </div>
            </div>
        );
    }


}

export default Header;
