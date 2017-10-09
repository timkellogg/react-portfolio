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

import App      from './components/App';
import Landing  from './components/Landing';
import Project  from './components/Project';
import Category from './components/Category';
import Contact  from './components/Contact';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/projects/:project" component={Project} />
      <Route path="/categories/:category" component={Category} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
