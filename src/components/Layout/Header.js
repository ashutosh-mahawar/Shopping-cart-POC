import React from "react";
import { Fragment } from "react";

import HeaderCartButton from "./HeadCartButton";
import shoppingStoreImage from '../../assets/shopingstore.jpeg';

import classes from './Header.module.css';


const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Online Shopper's stop</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={shoppingStoreImage} alt='A table full of delicious food!' />
            </div>
        </Fragment>
    );
};

export default Header;