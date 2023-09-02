import React, { Component } from 'react';

export default class Route1 extends Component {
  render() {
    console.log('shen log: ', { props: this.props });
    const { number, name } = this.props.match.params;
    return <div>{`${name}，你接收到的数字是：${number}`},</div>;
  }
}
