import React, { Component } from 'react'
import MyNavLink from '../../components/MyNavLink';
import { Switch, Route, Redirect } from 'react-router-dom';
import Route1 from './Route1';
import Route2 from './Route2';

export default class NestedRoutes extends Component {
  render() {
    return (
      <>
        <div>二级路由：</div>
        <div>
          <MyNavLink to="/nested-routes/route1">route1</MyNavLink>
          &nbsp;
          <MyNavLink to="/nested-routes/route2">route2</MyNavLink>
        </div>
        <br />
        <Switch>
          <Route path="/nested-routes/route1" component={Route1} />
          <Route path="/nested-routes/route2" component={Route2} />
          <Redirect to="/nested-routes/route1" />
        </Switch>
      </>
    );
  }
}
