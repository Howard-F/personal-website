import React, { Component } from 'react';
import style from './style.css';
import { Link, Redirect } from "react-router-dom";

import About from '../About/About'
import Contact from '../Contact/Contact'
import Home from '../Home/Home'
import Interests from '../Interests/Interests'

import pdfFile from '../../assets/files/Howard_Fung_Resume.pdf';

class Resume extends React.Component{
    render() {
        return (
            <div id="wrapper">
                <div id='navbar'>
                    <ul id='navbar-list'>
                        <li>
                            <Link id="home" to="/home" style={{textDecoration: 'none' }}>&lt;home&gt;</Link>
                        </li>
                        <li>
                            <Link id="about" to="/about" style={{textDecoration: 'none' }}>&lt;about&gt;</Link>
                        </li>
                        <li>
                            <div id="resume">&lt;resume&gt;</div>
                        </li>
                        <li>
                            <a id="interests">&lt;interests&gt;</a>
                        </li>
                        <li>
                            <a id="contact">&lt;contact&gt;</a>
                        </li>
                    </ul>
                </div>
                <div id='resume-main'>
                    <div id='dl-resume-wrapper'>
                        <a id='dl-resume-link' target="_blank" download="Howard_Fung_Resume.pdf" href={ pdfFile }>
                            &gt; Download my Resume &lt;
                        </a>
                    </div>
                    <div id='view-resume-wrapper'>
                        <a id='view-resume-link' target='blank' href={ pdfFile }>
                            &gt; View my Resume &lt;
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;