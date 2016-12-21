require("./scss/style.scss");
require("./img/avatar.png");

import { createDevTools } from 'redux-devtools'
import LogMonitor from 'redux-devtools-log-monitor'
import DockMonitor from 'redux-devtools-dock-monitor'

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

import * as reducers from './reducers'

import Home from './components/home'
import ReposList from './components/repositorylist'
import UserList from './components/userlist'

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
})

const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="ctrl-h" changePositionKey="ctrl-q">
    <LogMonitor theme="tomorrow" preserveScrollTop={false} />
  </DockMonitor>
)

const store = createStore(
  reducer,
  DevTools.instrument()
)

const hashHistory = useRouterHistory(createHashHistory)({ queryKey: false });

const history = syncHistoryWithStore(hashHistory, store)

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/">
            <IndexRoute component={Home} />
            <Route path="search">
                <IndexRoute component={UserList} />
            </Route>
            <Route path="user/:userLogin">
                <IndexRoute component={ReposList} />
            </Route>
        </Route>
      </Router>
      <DevTools />
    </div>
  </Provider>,
  document.getElementById('container')
)
