// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

import Landing  from './components/Landing';
import Project  from './components/Project';
import Category from './components/Category';
import Contact  from './components/Contact';
import About    from './components/About';

// base styles
import './index.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/projects/:project" component={Project} />
      <Route path="/categories/:category" component={Category} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
