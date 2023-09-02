import { Component } from 'react';
import Hello from './pages/Hello';
import TestAxios from './pages/TestAxios';
import GithubSearch from './pages/GithubSearch';
import { Route } from 'react-router-dom';
import MyNavLink from './components/MyNavLink';

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          {/* 原生html，切换页面的方式：<a href="/aa">aa</a> */}
          <MyNavLink to="/about">Hello</MyNavLink>
          &nbsp;
          <MyNavLink to="/axios">测试axios</MyNavLink>
          &nbsp;
          <MyNavLink to="/github-search">Hello</MyNavLink>
        </div>
        <br />
        <Route path="/about" component={Hello} />

        <Route path="/axios" component={TestAxios} />

        <Route path="/github-search" component={GithubSearch} />
      </>
    );
  }
}
