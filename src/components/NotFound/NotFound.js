import React, { Component } from 'react';
import style from './style.css';
import { Link, Redirect } from "react-router-dom";

import Home from '../Home/Home';

class NotFound extends React.Component{
    render() {
        return (
            <div id="notfound-wrapper">
                <div id="notfound-main">
                    <div id='title'>404: Page Not Found</div>
                    <button id='home-but'><Link id="home" to="/" style={{textDecoration: 'none' }}><div id='home-text'>Return Home</div></Link></button>
                </div>
            </div>
        )
    }
}

export default NotFound;