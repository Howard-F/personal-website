import React, { Component } from 'react';
import style from './style.css';
import { Link, Redirect } from "react-router-dom";

import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import Interests from '../Interests/Interests'
import Resume from '../About/About'

class About extends React.Component{
    render() {
        return (
            <div id="wrapper">
                <div id='navbar'>
                    <ul id='navbar-list'>
                        <li>
                            <Link id="home" to="/home" style={{textDecoration: 'none' }}>&lt;home&gt;</Link>
                        </li>
                        <li>
                            <div id="about" style={{ textDecoration: 'none' }}>&lt;about&gt;</div>
                        </li>
                        <li>
                            <Link id="resume" to="/resume" style={{textDecoration: 'none' }}>&lt;resume&gt;</Link>
                        </li>
                        <li>
                            <a id="interests">&lt;interests&gt;</a>
                        </li>
                        <li>
                            <a id="contact">&lt;contact&gt;</a>
                        </li>
                    </ul>
                </div>
                <div id='about-main'>
                    Sorry, this page is still under construction.
                </div>
            </div>
        )
    }
}

export default About;