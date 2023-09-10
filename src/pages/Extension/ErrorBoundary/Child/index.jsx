import React, { Component } from 'react';

export default class Child extends Component {
  state = {
    a: '',
  };
  render() {
    return <div>
      aa
      {this.state.a.map((item) => item.toString())}
    </div>;
  }
}
