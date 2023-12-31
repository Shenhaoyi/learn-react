import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SetState from './SetState';
import MyNavLink from '../../components/MyNavLink';
import { Spin } from 'antd';
import UseHooks from './UseHooks';
import Slot from './Slot';
import ErrorBoundary from './ErrorBoundary';
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
          <MyNavLink to="/extension/lazy-load">lazy load</MyNavLink>
          &nbsp;
          <MyNavLink to="/extension/use-hooks">使用hooks</MyNavLink>
          &nbsp;
          <MyNavLink to="/extension/slot">React中的插槽</MyNavLink>
          &nbsp;
          <MyNavLink to="/extension/error-boundary">错误边界</MyNavLink>
        </div>
        <br />
        <Suspense fallback={<Spin />}>
          <Switch>
            <Route path="/extension/set-state" component={SetState} />
            <Route path="/extension/lazy-load" component={LazyLoad} />
            <Route path="/extension/use-hooks" component={UseHooks} />
            <Route path="/extension/slot" component={Slot} />
            <Route path="/extension/error-boundary" component={ErrorBoundary} />
            <Redirect to="/extension/set-state" />
          </Switch>
        </Suspense>
      </>
    );
  }
}
