import React, { Component } from 'react'

export default class RenderProps extends Component {
  state = {
    name: 'shen'
  }
  render() {
    return (
      <div>
        RenderProps
        <div style={{ padding: '20px' }}>{this.props.render(this.state.name)}</div>
      </div>
    );
  }
}
