import React, { Component } from 'react';

export default class Route3 extends Component {
  render() {
    console.log('shen log: ', { props: this.props });
    const { state } = this.props.location;
    return <div>{`${state?.name}，你接收到的数字是：${state?.number}`},</div>;
  }
}
