import React, { Component } from 'react';
import style from './style.css';
import { Link, Redirect } from "react-router-dom";

import About from '../About/About'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import Resume from '../About/About'


class Interests extends React.Component{
    render() {
        return (
            <div id="wrapper">
                <div id='navbar'>
                    <ul id='navbar-list'>
                        <li>
                            <Link id="about" to="/about" style={{ color: 'white', textDecoration: 'none' }}>&lt;about&gt;</Link>
                        </li>
                        <li>
                            <a id="resume">&lt;resume&gt;</a>
                        </li>
                        <li>
                            <a id="interests">&lt;interests&gt;</a>
                        </li>
                        <li>
                            <a id="contact">&lt;contact&gt;</a>
                        </li>
                    </ul>
                </div>
                <div id='main'>
                    ABOUT PAGE
                </div>
            </div>
        )
    }
}

export default Interests;