import { Component } from 'react';
import Hello from './pages/Hello';
import TestAxios from './pages/TestAxios';
import GithubSearch from './pages/GithubSearch';
import { Route, Switch, Redirect } from 'react-router-dom';
import MyNavLink from './components/MyNavLink';

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          {/* 原生html，切换页面的方式：<a href="/aa">aa</a> */}
          <MyNavLink to="/hello">Hello</MyNavLink>
          &nbsp;
          <MyNavLink to="/axios">测试axios</MyNavLink>
          &nbsp;
          <MyNavLink to="/github-search">搜索github用户</MyNavLink>
        </div>
        <br />
        <Switch>
          <Route path="/hello" component={Hello} />
          <Route path="/axios" component={TestAxios} />
          <Route path="/github-search" component={GithubSearch} />
          {/* 如果当前的路径到Redirect还没有匹配到，就重定向（后面如果再写Route就不会生效了） */}
          <Redirect to="/hello" />
        </Switch>
      </>
    );
  }
}
