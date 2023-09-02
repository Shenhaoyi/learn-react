import React, { Component } from 'react';
import qs from 'query-string';

export default class Route2 extends Component {
  render() {
    console.log('shen log: ', { props: this.props });
    const { search } = this.props.location;
    const query = qs.parse(search.slice(1)) // 记得去掉问号
    return <div>{`${query.name}，你接收到的数字是：${query.number}`},</div>;
  }
}
