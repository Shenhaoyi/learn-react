import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SetState from './SetState';
import MyNavLink from '../../components/MyNavLink';

export default class NestedRoutes extends Component {
  render() {
    return (
      <>
        <hr />
        <div>二级路由：</div>
        <div>
          <MyNavLink to="/extension/set-state">setState</MyNavLink>
          &nbsp;
        </div>
        <br />
        <Switch>
          <Route path="/extension/set-state" component={SetState} />
          <Redirect to="/extension/set-state" />
        </Switch>
      </>
    );
  }
}
