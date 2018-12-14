import React from 'react';
import { render } from 'react-dom';
import {
  Route,
  Switch,
  BrowserRouter,
    Redirect,
} from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup
} from 'react-transition-group';

import './style.css';
import Nav from './Navigation/Nav';
import Home from './Home/Home';
import About from './About/About';
import Products from './Products/Products';
import Contact from './Contact/Contact';

// Does the user's browser support the HTML5 history API?
// If the user's browser doesn't support the HTML5 history API then we
// will force full page refreshes on each page change.
const supportsHistory = 'pushState' in window.history;

const App = ({  }) => (
  <BrowserRouter forceRefresh={!supportsHistory}>
    <div>
      <Nav />
      <main>
        <Route
          render={({ location }) => {
            const { pathname } = location;
            return (
              <TransitionGroup>
                <CSSTransition
                  key={pathname}
                  classNames="page"
                  timeout={{
                    enter: 300,
                    exit: 300,
                  }}
                >
                  <Route
                    location={location}
                    render={() => (
                      <Switch>
                          <Route
                              exact
                              path="/"
                              component={Home}
                              /*activeClassName="active"*/
                          />
                        <Route
                          exact
                          path="/home"
                          component={Home}
                          /*activeClassName="active"*/
                        />
                        <Route
                          path="/about"
                          component={About}
                        />
                        <Route
                              path="/products"
                              component={Products}
                        />
                        <Route
                              path="/contact"
                              component={Contact}
                        />
                       {/* <Route
                          component={Error404}
                        />*/}
                      </Switch>
                    )}
                  />
                </CSSTransition>
              </TransitionGroup>
            );
          }}
        />
      </main>
    </div>
  </BrowserRouter>
);

render(<App />, document.getElementById('root'));
