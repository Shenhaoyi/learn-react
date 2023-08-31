import { Component } from 'react';
import Hello from './components/Hello';
import TestAxios from './components/TestAxios';

export default class App extends Component {
  render() {
    return (
      <>
        <Hello></Hello>
        <TestAxios></TestAxios>
      </>
    );
  }
}
