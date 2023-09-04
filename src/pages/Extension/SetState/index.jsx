import React, { Component } from 'react';
import { Button } from 'antd';
export default class Extension extends Component {
  state = {
    count: 1,
  };
  add = async () => {
    const logCount = () => {
      console.log('shen log: ', { count: this.state.count });
    };
    // nextState为对象
    this.setState(
      {
        count: this.state.count + 1,
      },
      logCount, // 回调，等到render结束才会执行
    );
    // nextState为函数
    this.setState(
      (state, props) => ({
        count: state.count + 1,
      }),
      logCount,
    );
    logCount(); // 同步执行，则打印的是未修改的状态
  };
  render() {
    return (
      <div style={{ marginLeft: '20px' }}>
        <div>{this.state.count}</div>
        <br />
        <Button onClick={this.add}>点击+1</Button>
      </div>
    );
  }
}
