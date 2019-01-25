import React, { Component } from 'react';
import style from './style.css';
import { Link, Redirect } from "react-router-dom";

import About from '../About/About'
import Contact from '../Contact/Contact'
import Interests from '../Interests/Interests'
import Resume from '../About/About'


class Home extends React.Component{
    render() {
        return (
            <div id="wrapper">
                <div id='navbar'>
                    <ul id='navbar-list'>
                        <li>
                            <div id="home">&lt;home&gt;</div>
                        </li>
                        <li>
                            <Link id="about" to="/about" style={{textDecoration: 'none' }}>&lt;about&gt;</Link>
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
                <div id='home-main'>
                    <div id='photo'>
                        <img id='headshot' alt="howard-fung" src={require('../../assets/images/howard-fung.png')}></img>
                    </div>
                    <div id='intro'>
                        Hello, I am Howard Fung, a University of Toronto Computer Science Graduate 
                    <hr></hr>
                        main text
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;