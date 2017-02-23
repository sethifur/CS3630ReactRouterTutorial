import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routes from './modules/routes'

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('app')
)

//render((
//  <Router history={browserHistory}>
//    <Route path="/" component={App}>
//
//      {/* add it here, as a child of `/` */}
//      <IndexRoute component={Home}/>
//
//      <Route path="/repos" component={Repos}>
//        <Route path="/repos/:userName/:repoName" component={Repo}/>
//      </Route>
//      <Route path="/about" component={About}/>
//    </Route>
//  </Router>
//), document.getElementById('app'))