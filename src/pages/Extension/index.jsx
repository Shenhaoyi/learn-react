import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SetState from './SetState';
import MyNavLink from '../../components/MyNavLink';
import { Spin } from 'antd';
const LazyLoad = lazy(() => import('./LazyLoad'));

export default class Extension extends Component {
  render() {
    return (
      <>
        <hr />
        <div>二级路由：</div>
        <div>
          <MyNavLink to="/extension/set-state">setState</MyNavLink>
          &nbsp;
          <MyNavLink to="/extension/lazy-load">setState</MyNavLink>
          &nbsp;
        </div>
        <br />
        <Suspense fallback={<Spin />}>
          <Switch>
            <Route path="/extension/set-state" component={SetState} />
            <Route path="/extension/lazy-load" component={LazyLoad} />
            <Redirect to="/extension/set-state" />
          </Switch>
        </Suspense>
      </>
    );
  }
}
