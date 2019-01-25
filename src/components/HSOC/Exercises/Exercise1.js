import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";

import style1 from './css/bootstrap-theme.min.css';
import style2 from './css/bootstrap.min.css';
import style3 from './css/HSoC.css';

var style = {style1, style2, style3}

class Exercise1 extends React.Component{
    render() {
        return (
  <div id="bodydouble" data-spy="scroll" data-target=".sidenav">
    <div class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="">Howard's School of Code</a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
          </ul>
          <ul class="nav navbar-nav navbar-right">
          </ul>
        </div>
      </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <div class="sidenav" data-spy="affix">
                    <ul class="nav nav-stacked" id="sidenav-content">   
                    </ul>
                </div> 
            </div>
            <div class="col-md-9" id="assignment-description"> 
                    
                    <center>
                      <div>
                          <h1>Exercise 1: Functions and Variables</h1>
                      </div>
                    </center>
                    
                    <br></br>
                    <br></br>
                    <br></br>

                    <div id="assignment" class="sidenav-anchor">
                        <h3>Function 1: A useless function</h3>
                        <p>Create a function called useless, that takes 3 parameters of any type, does nothing with them, and returns the string <b>That was a waste of time.</b> Running your code in the shell should look like this:
                        <br></br>
                        <code>
                          <div id="code-div">
                            &gt;&gt;&gt; useless(1, 2, 3) <br></br>
                            'That was a waste of time' <br></br>
                            &gt;&gt;&gt; useless("Hello", "Goodbye", 999) <br></br>
                            'That was a waste of time' <br></br>
                          </div>
                        </code>
                        </p>
                    </div>

                    <div id="assignment" class="sidenav-anchor">
                        <h3>Function 2: Squaring a Number</h3>
                        <p>Create a function called square me, that takes 1 number (int or float) parameter and returns the square of that number as a result (you don’t have to worry about what it does if something other than a float/int is passed in). Your code should behave as follows:
                        <br></br>
                        <code>
                          <div id="code-div">
                            &gt;&gt;&gt; square_me(3) <br></br>
                            9 <br></br>
                            &gt;&gt;&gt; square_me(9.5) <br></br>
                            90.25 <br></br>
                        </div>
                        </code>
                        </p>
                    </div>

                    <div id="assignment" class="sidenav-anchor">
                        <h3>Function 3: Biographical Data</h3>
                        <p>Create a function called student data, that takes 4 parameters, a name (a string), age (an integer), random number (a string) and whether they are enrolled in Howard's School of Code (a boolean), and returns a string containing that information in the following format: <b> &lt;random number, name, age, enrolled&gt; </b>. It may be helpful to remember that you can cast a number or a boolean to a string using the str function. Your code should work as follows:
                        <br></br>
                        <code>
                          <div id="code-div">
                            &gt;&gt;&gt; student_data("Howard", 35, "1234567", False)<br></br>
                            '&lt;1234567, Brian, 35, False&gt;' <br></br>
                            &gt;&gt;&gt; student_data("Frank", 97, "0000001", True) <br></br>
                            '&lt;0000001, Nick, 97, True&gt;' <br></br>
                        </div>
                        </code>
                        </p>
                    </div>

            </div>
        </div>
    </div>
  </div>
        )
    }
}

export default Exercise1;