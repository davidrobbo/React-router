import React, { Component } from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Home from './Home'
import Account from './Account'
import Child from './Child'


class App extends Component {
  render() {
    return (
        <Router history={browserHistory}>
          <Route path="/" component={Home}>
              <IndexRoute component={Child}></IndexRoute>
              <Route path="account" component={Account}></Route>
          </Route>
        </Router>
    )
  }
}

export default App
