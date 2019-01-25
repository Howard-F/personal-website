import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Interests from './components/Interests/Interests'
import Resume from './components/Resume/Resume'
import NotFound from './components/NotFound/NotFound'

import Exercise1 from './components/HSOC/Exercises/Exercise1'

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/personal-website" exact component={Home} />
    <Route path="/home" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/resume" exact component={Resume} />
    <Route path="/hsoc/exercises/exercise1" exact component={Exercise1} />
    <Route path="/*" component={NotFound} />
  </Switch>;
