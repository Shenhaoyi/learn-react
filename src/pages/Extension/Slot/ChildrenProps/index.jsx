import React, { Component } from 'react';

export default class ChildrenProps extends Component {
  render() {
    return (
      <div style={{ border: '1px solid red' }}>
        ChildrenProps
        <div style={{ padding: '20px' }}>{this.props.children}</div>
      </div>
    );
  }
}
