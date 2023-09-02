import { Component } from 'react';
import Hello from './components/Hello';
import TestAxios from './components/TestAxios';
import GithubSearch from './components/GithubSearch';
import { Link, Route } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <>
        <div>
          {/* 原生html，切换页面的方式：<a href="/aa">aa</a> */}
          <Link to="/about">Hello</Link>&nbsp;
          <Link to="/axios">测试axios</Link>&nbsp;
          <Link to="/github-search">Hello</Link>
        </div>
        <br />
        <Route path="/about" component={Hello} />

        <Route path="/axios" component={TestAxios} />

        <Route path="/github-search" component={GithubSearch} />
      </>
    );
  }
}
