import { Component } from 'react';
import Hello from './components/Hello';
import TestAxios from './components/TestAxios';
import GithubSearch from './components/GithubSearch';

export default class App extends Component {
  render() {
    return (
      <>
        <Hello></Hello>
        <br></br>
        <TestAxios></TestAxios>
        <br></br>
        <br></br>
        <GithubSearch></GithubSearch>
      </>
    );
  }
}
