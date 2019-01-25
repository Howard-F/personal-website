import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Interests from './components/Interests/Interests'
import Resume from './components/Resume/Resume'
import NotFound from './components/NotFound/NotFound'

export default () =>
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/home" exact component={Home} />
    <Route path="/about" exact component={About} />
    <Route path="/resume" exact component={Resume} />
    <Route path="/*" component={NotFound} />
  </Switch>;
