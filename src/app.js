require("./styl/style.styl");

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

const store = createStore(reducer)

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
    </div>
  </Provider>,
  document.getElementById('container')
)
