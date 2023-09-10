import React, { Component } from 'react';
import ChildrenProps from './ChildrenProps';
import RenderProps from './RenderProps';

class Children extends Component {
  render() {
    return (
      <div style={{ height: '100px', width: '100px', background: 'red' }}>
        {this.props.name || ''}
      </div>
    );
  }
}

export default class Slot extends Component {
  render() {
    return (
      <div>
        <ChildrenProps>文本children: xxx</ChildrenProps>
        <hr></hr>
        <ChildrenProps>
          组件children<Children></Children>
        </ChildrenProps>
        <hr></hr>
        <RenderProps render={(name) => <Children name={name} />}></RenderProps>
      </div>
    );
  }
}
